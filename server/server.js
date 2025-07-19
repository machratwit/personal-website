import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
dotenv.config();
const app = express();
const PORT = 3001;
const WEBHOOK_URL = process.env.WEBHOOK_URL



app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message || !name) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: 
        `📩 **New Contact Form Submission**
**Name**: ${name}
**Email**: ${email}
**Message**: ${message}`,
      }),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending to Discord:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});