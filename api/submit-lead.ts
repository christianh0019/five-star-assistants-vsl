import type { VercelRequest, VercelResponse } from '@vercel/node';

const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/Vfs1lM3WjyR7NO8AgZeL/webhook-trigger/bykaLCimOn5w3duaqxpK';
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Slack #new-leads notification (requires SLACK_BOT_TOKEN in this project's env,
// and the bot invited to the channel). No-op if the token is missing.
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_NEW_LEADS_CHANNEL_ID = process.env.SLACK_NEW_LEADS_CHANNEL_ID || 'C0AS7RJFGTG';

function parseName(full: string): { first: string | null; last: string | null } {
    const parts = full.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return { first: null, last: null };
    const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    if (parts.length === 1) return { first: titleCase(parts[0]), last: null };
    return { first: titleCase(parts[0]), last: parts.slice(1).map(titleCase).join(' ') };
}

// Normalize any phone the user types into E.164 so Telnyx/GHL can dial it.
// US/CA is assumed for bare 10-digit or 1-prefixed 11-digit numbers.
// Numbers already in +<country> format (or clearly non-US) are preserved.
function normalizePhone(raw: string): string | null {
    if (!raw) return null;
    const hadPlus = raw.trim().startsWith('+');
    const digits = raw.replace(/\D/g, '');
    if (!digits) return null;
    // Already international (has a + prefix) — keep the digits, just re-attach the +.
    if (hadPlus) return `+${digits}`;
    // Bare US/CA 10-digit number → prepend +1.
    if (digits.length === 10) return `+1${digits}`;
    // 11-digit starting with country code 1 → +1XXXXXXXXXX.
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    // Anything else: best-effort E.164 (don't silently drop a real number).
    return `+${digits}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const {
        name = '',
        email = '',
        phone = '',
        businessName = '',
        website = '',
        monthlyRevenue = '',
        hiringTimeline = '',
        contactType = '',
    } = req.body ?? {};

    // Force phone into +1 E.164 before it goes anywhere (GHL/Telnyx can't dial a bare 10-digit number).
    const normalizedPhone = normalizePhone(phone);

    // Fire both in parallel — neither blocks the other
    const [ghlResult, sbResult, slackResult] = await Promise.allSettled([
        // 1. GHL webhook
        fetch(GHL_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone: normalizedPhone ?? phone, businessName, website, monthlyRevenue, hiringTimeline, contactType }),
        }),

        // 2. Supabase insert
        (async () => {
            const { first, last } = parseName(name);
            const row = {
                first_name:      first,
                last_name:       last,
                email:           email || null,
                phone:           normalizedPhone,
                company:         businessName || null,
                website:         website || null,
                monthly_revenue: monthlyRevenue || null,
                hiring_timeline: hiringTimeline || null,
                source:          'ad_optin',
                status:          'new_opted_in',
                notes:           contactType ? `Source: ${contactType}` : null,
            };

            const r = await fetch(`${SUPABASE_URL}/rest/v1/sales_leads`, {
                method: 'POST',
                headers: {
                    'apikey':         SUPABASE_SERVICE_KEY,
                    'Authorization':  `Bearer ${SUPABASE_SERVICE_KEY}`,
                    'Content-Type':   'application/json',
                    'Prefer':         'return=minimal',
                },
                body: JSON.stringify(row),
            });

            if (!r.ok) {
                const text = await r.text();
                throw new Error(`Supabase insert failed: ${text}`);
            }
        })(),

        // 3. Slack #new-leads notification
        (async () => {
            if (!SLACK_BOT_TOKEN) return;
            const sourceLabel = 'Facebook Ads';
            const text =
                `:chart_with_upwards_trend: New Lead\n` +
                `:eyes: Source: ${sourceLabel}\n` +
                `:bust_in_silhouette: Name: ${name || '—'}\n` +
                `:dollar: Revenue: ${monthlyRevenue || '—'}\n` +
                `:hourglass_flowing_sand: Hiring Timeline: ${hiringTimeline || '—'}`;
            const r = await fetch('https://slack.com/api/chat.postMessage', {
                method: 'POST',
                headers: {
                    'Content-Type':  'application/json; charset=utf-8',
                    'Authorization': `Bearer ${SLACK_BOT_TOKEN}`,
                },
                body: JSON.stringify({ channel: SLACK_NEW_LEADS_CHANNEL_ID, text }),
            });
            const j = await r.json();
            if (!j.ok) throw new Error(`Slack error: ${j.error}`);
        })(),
    ]);

    if (ghlResult.status === 'rejected') console.error('GHL webhook error:', ghlResult.reason);
    if (sbResult.status === 'rejected') console.error('Supabase insert error:', sbResult.reason);
    if (slackResult.status === 'rejected') console.error('Slack notify error:', slackResult.reason);

    // Always return success so the user flow isn't interrupted
    return res.status(200).json({ success: true });
}
