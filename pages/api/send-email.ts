// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  success?: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const WORKER_URL = process.env.WORKER_URL; // Accede a la variable sensible

  // Verifica si la variable está definida
  if (!WORKER_URL) {
    return res.status(500).json({ success: false });
  }

  if (req.method === 'POST') {
    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body), // Pasa los datos del formulario
      });

      if (response.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ success: false });
      }
    } catch {
      return res.status(500).json({ success: false });
    }
  } else {
    return res.status(405).json({ success: false });
  }
}
