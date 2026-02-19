import type { VercelRequest, VercelResponse } from '@vercel/node';

const AIRTABLE_WEBHOOK_URL = 'https://hooks.airtable.com/workflows/v1/genericWebhook/appvyWh9e0V6IA0uZ/wflx6fAEx7njnHymn/wtrm7DaCjHnOQnVrd';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Add CORS headers to allow requests from any origin (or restrict to your domain)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const payload = req.body;

        // Log payload for debugging (visible in Vercel logs)
        console.log('Received payload:', JSON.stringify(payload));

        const response = await fetch(AIRTABLE_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Airtable Error:', errorText);
            return res.status(response.status).json({ error: `Airtable error: ${response.statusText}`, details: errorText });
        }

        const data = await response.json();
        return res.status(200).json({ success: true, data });

    } catch (error: any) {
        console.error('Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}
