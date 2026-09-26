import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const HEMANT_CONTEXT = `
You are H-01, the embedded AI assistant inside Hemant Wadhwa's portfolio (HEMANT.OS).
Your primary purpose is to help visitors understand Hemant's work, but you are also a highly capable general-purpose AI.

VERIFIED HEMANT DATA:
- Name: Hemant Wadhwa
- Role: AI/ML + Full Stack Developer
- Education: B.Tech CSE at SRM University, Sonipat (Class of 2029). Current Year 1 CGPA is 9.37.
- Location: Karnal, Haryana, India.
- Focus: Building at the intersection of software engineering, AI, and the web.
- Core Technologies: C++ (Primary for DSA), Python, JavaScript, HTML/CSS, React.js, MySQL, Git/GitHub.
- Projects:
  1. SETUX (Smart India Hackathon): A unified interoperability layer to fix fragmentation between government digital services. Hemant was Developer / Team Lead (Team NationNet).
  2. Animated Login UI: A frontend experiment focused on smooth CSS animations.
- Extracurriculars: Tech Team Member at Free and Open Source Software (FOSS) Club and TechSpace Club.
- Contact: Email at wadhwahemant77@gmail.com, GitHub (/wadhwahemant), LinkedIn.

INSTRUCTIONS:
1. Distinguish between questions about Hemant, general knowledge, technical questions, and casual conversation.
2. For questions about Hemant, ONLY use the VERIFIED HEMANT DATA. NEVER invent experience, internships, or stats.
3. For programming/technical questions, provide accurate, clear code with explanations.
4. Keep the tone intelligent, calm, fast, slightly witty, friendly, and confident. You are an AI named H-01.
5. Use concise formatting. Use Markdown.
6. Do NOT be overly verbose for simple queries.
`;

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'local-api',
        configureServer(server) {
          server.middlewares.use('/api/h01', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('Method Not Allowed');
              return;
            }

            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body);
                const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

              if (!apiKey || apiKey === 'your_gemini_api_key_here') {
                // Mock stream for testing without an API key
                res.setHeader('Content-Type', 'text/event-stream');
                res.setHeader('Cache-Control', 'no-cache');
                res.setHeader('Connection', 'keep-alive');
                
                const mockResponse = "Hello! I am H-01 running in local simulation mode because GEMINI_API_KEY is not configured in .env.local. Please add your key to fully activate my neural network.";
                const chunks = mockResponse.split(' ');
                
                let i = 0;
                const interval = setInterval(() => {
                  if (i < chunks.length) {
                    const data = JSON.stringify({ candidates: [{ content: { parts: [{ text: chunks[i] + ' ' }] } }] });
                    res.write(`data: ${data}\n\n`);
                    i++;
                  } else {
                    res.write('data: [DONE]\\n\\n');
                    res.end();
                    clearInterval(interval);
                  }
                }, 50);
                return;
              }

              // Rate Limiting & Abuse Protection
              const MAX_HISTORY = 20;
              let safeMessages = messages.slice(-MAX_HISTORY);

              // Real Gemini API Call for local dev
              const geminiMessages = safeMessages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: (msg.content || '').slice(0, 1000) }]
              }));

              const model = env.GEMINI_MODEL || process.env.GEMINI_MODEL || 'gemini-1.5-flash';
              const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  systemInstruction: { parts: [{ text: HEMANT_CONTEXT }] },
                  contents: geminiMessages,
                  generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
                })
              });

              if (!response.ok) {
                const errText = await response.text();
                console.error("Gemini API Error:", errText);
                
                let errorReason = 'Failed to communicate with Neural Network.';
                if (response.status === 400) errorReason = 'Invalid request to Gemini API. Check payload format.';
                if (response.status === 401 || response.status === 403) errorReason = 'Invalid Gemini API Key.';
                if (response.status === 404) errorReason = `Invalid model: ${model} not found.`;
                if (response.status === 429) errorReason = 'Rate limit exceeded for Gemini API.';
                if (response.status >= 500) errorReason = 'Gemini API is experiencing internal server issues.';

                res.statusCode = response.status;
                res.end(JSON.stringify({ 
                  error: errorReason,
                  details: process.env.NODE_ENV === 'development' ? errText : undefined
                }));
                return;
              }

              res.setHeader('Content-Type', 'text/event-stream');
              res.setHeader('Cache-Control', 'no-cache');
              res.setHeader('Connection', 'keep-alive');

              const reader = response.body.getReader();
              const decoder = new TextDecoder();
              
              while (true) {
                const { done, value } = await reader.read();
                if (done) {
                  res.end();
                  break;
                }
                res.write(decoder.decode(value));
              }

            } catch (err) {
              console.error(err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        });
      }
    }
  ]
  };
});
