export const config = {
  runtime: 'edge',
};

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

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), { status: 400 });
    }

    // Rate Limiting & Abuse Protection
    const MAX_HISTORY = parseInt(process.env.H01_MAX_MESSAGES || '20');
    let safeMessages = messages.slice(-MAX_HISTORY);

    const apiKey = (process.env.GEMINI_API_KEY || '').trim();
    if (!apiKey) {
      return new Response(JSON.stringify({ 
        error: 'AI is currently offline. GEMINI_API_KEY is not configured on the server.' 
      }), { status: 503 });
    }

    // Format messages for Gemini API
    const geminiMessages = safeMessages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: (msg.content || '').slice(0, 1000) }] // Max 1000 chars per message
    }));

    const model = (process.env.GEMINI_MODEL || 'gemini-1.5-flash-latest').trim();
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: HEMANT_CONTEXT }]
        },
        contents: geminiMessages,
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', errorText);
      
      let errorReason = 'Failed to communicate with Neural Network.';
      if (response.status === 400) errorReason = 'Invalid request to Gemini API. Check payload format.';
      if (response.status === 401 || response.status === 403) errorReason = 'Invalid Gemini API Key.';
      if (response.status === 404) errorReason = `Invalid model: ${model} not found.`;
      if (response.status === 429) errorReason = 'Rate limit exceeded for Gemini API.';
      if (response.status >= 500) errorReason = 'Gemini API is experiencing internal server issues.';

      return new Response(JSON.stringify({ 
        error: errorReason,
        details: process.env.NODE_ENV === 'development' ? errorText : undefined
      }), { status: response.status });
    }

    // Pipe the Server-Sent Events stream directly to the client
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), { status: 500 });
  }
}
