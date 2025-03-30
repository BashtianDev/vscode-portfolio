import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  error?: string;
  success?: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const WORKER_URL = process.env.WORKER_URL; // Accede a la variable sensible

  // Verifica si la variable está definida
  if (!WORKER_URL) {
    return res.status(500).json({ error: "WORKER_URL no está definida" });
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

      const data = await response.json();

      if (response.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ error: "Error al enviar el correo" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Hubo un error al intentar contactar con el Worker." });
    }
  } else {
    return res.status(405).json({ error: "Método no permitido" });
  }
}
