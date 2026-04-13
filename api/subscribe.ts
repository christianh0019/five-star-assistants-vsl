import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { email, first_name } = req.body ?? {};

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Newsletter service not configured.' });
  }

  try {
    const response = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email_address: email.trim().toLowerCase(),
        ...(first_name ? { first_name: first_name.trim() } : {}),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Kit API error:', response.status, err);
      return res.status(response.status).json({ error: err });
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
