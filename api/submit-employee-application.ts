import type { VercelRequest, VercelResponse } from '@vercel/node';

// Set FSA_APP_URL in your Vercel environment variables
// e.g. https://app.fivestarassistants.com
const FSA_APP_URL = process.env.FSA_APP_URL ?? '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    if (!FSA_APP_URL) {
        console.error('FSA_APP_URL environment variable is not set');
        return res.status(500).json({ error: 'Server misconfiguration' });
    }

    try {
        const payload = req.body;
        console.log('Received employee application payload:', !!payload);

        const response = await fetch(`${FSA_APP_URL}/api/apply/general`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('FSA App Error:', errorText);
            return res.status(response.status).json({ error: `Submission failed: ${response.statusText}`, details: errorText });
        }

        const data = await response.json();
        return res.status(200).json({ success: true, data });

    } catch (error: any) {
        console.error('Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}
