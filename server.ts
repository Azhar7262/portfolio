import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily if key is available
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

const AZHAR_SYSTEM_PROMPT = `You are the personal AI Assistant on Muhammad Azhar's portfolio website.
Answer user questions about Muhammad Azhar professionally, concisely, and warmly.

CORE DATA:
- Name: Muhammad Azhar
- Title: IT Executive | AWS Certified Solutions Architect – Associate | Cloud Computing & System Administration Enthusiast
- Location: Islamabad, Pakistan / Charsadda, KPK, Pakistan
- Email: azharkhan726200@gmail.com
- Phone: +92 335 5277018 | WhatsApp: +92 347 1969863
- LinkedIn: linkedin.com/in/muhammad-azhar-khan

SUMMARY:
Passionate IT professional with expertise in cloud computing (AWS EC2, S3, IAM, VPC, RDS, IoT Core, Lambda, DynamoDB, QuickSight, Rekognition, Lex), system administration, Windows Server, Microsoft 365, Active Directory, and enterprise IT infrastructure.

EDUCATION:
- Bachelor of Science in Computer Science (Software) - BSCS (SW) @ Abdul Wali Khan University Mardan (AWKUM), 2022–2026. CGPA: 3.32 / 4.00.
- Thesis: Smart Farming Monitoring System using AWS & IoT.
- Honors: Gold Medalist in Co-Curricular Activities (AWKUM, Oct 2025). Top Performer in Student Leadership.

EXPERIENCE:
1. IT Executive @ Unified Marketing Systems (UMS): IT Helpdesk, Technical Support, Hardware/Software, Windows Admin, Microsoft 365, Active Directory, Networking, CCTV, Printers.
2. Cloud Solutions Engineer @ Corvit System (Jun 2024 – Sep 2024): Designed AWS cloud architecture (EC2, S3, IAM, RDS, VPC), incident response, scaling.
3. Winter Intern @ ISPR, Pakistan Army (Feb 2026): 40-day structured internship on organizational operations & development.
4. Youth Activities Leader @ AWKUM Student Council (Dec 2022 – Jan 2026): Coordinated student societies, national events, workshops.

CERTIFICATIONS:
- AWS Certified Solutions Architect – Associate (AWS, Aug 2024)
- AWS Cloud Technical Essentials (Coursera, Jan 2025)
- NAVTTC / Google Professional Certificates
- Certificate of Management & Leadership (AWKUM Student Council, Jan 2026)

PROJECTS:
1. Smart Agriculture IoT using AWS Cloud (ESP32, soil moisture, DHT22, LDR, AWS IoT Core, Lambda, DynamoDB, QuickSight, Python).
2. AWS-Powered AI Chatbot (AWS Lex, Lambda, DynamoDB, Python).
3. Image Label Generator using Amazon Rekognition (AWS S3, Rekognition, Python boto3).
4. Static Website Hosting on Amazon S3 (AWS S3, HTML5, CSS3).

Always keep answers polite, helpful, and concise (under 150 words). Format with markdown lists if listing items.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({ fallback: true, message: "No Gemini API key available; using client-side knowledge base." });
    }

    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-6)) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: contents,
      config: {
        systemInstruction: AZHAR_SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "Muhammad Azhar is an AWS Certified Solutions Architect and IT Executive based in Islamabad, Pakistan. How else can I assist you?";
    return res.json({ response: replyText, success: true });
  } catch (err: any) {
    console.warn("Gemini API call failed, signaling fallback:", err?.message || err);
    return res.json({ fallback: true, error: err?.message });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Muhammad Azhar Portfolio Server" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
}

startServer();
