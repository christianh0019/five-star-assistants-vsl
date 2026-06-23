import type { VercelRequest, VercelResponse } from '@vercel/node';

const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/Vfs1lM3WjyR7NO8AgZeL/webhook-trigger/bykaLCimOn5w3duaqxpK';
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

function parseName(full: string): { first: string | null; last: string | null } {
    const parts = full.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return { first: null, last: null };
    const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    if (parts.length === 1) return { first: titleCase(parts[0]), last: null };
    return { first: titleCase(parts[0]), last: parts.slice(1).map(titleCase).join(' ') };
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

    // Fire both in parallel — neither blocks the other
    const [ghlResult, sbResult] = await Promise.allSettled([
        // 1. GHL webhook (unchanged behavior)
        fetch(GHL_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, businessName, website, monthlyRevenue, hiringTimeline, contactType }),
        }),

        // 2. Supabase insert
        (async () => {
            const { first, last } = parseName(name);
            const row = {
                first_name:      first,
                last_name:       last,
                email:           email || null,
                phone:           phone || null,
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
    ]);

    if (ghlResult.status === 'rejected') console.error('GHL webhook error:', ghlResult.reason);
    if (sbResult.status === 'rejected') console.error('Supabase insert error:', sbResult.reason);

    // Always return success so the user flow isn't interrupted
    return res.status(200).json({ success: true });
}
