import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Send, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const H01Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: 'H-01 ONLINE. How can I assist with HEMANT.OS?', isWelcome: true }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isProcessing]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMsg = input.trim();
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    
    setMessages(newMessages);
    setInput('');
    setIsProcessing(true);

    try {
      // Add a placeholder model message for streaming
      setMessages(prev => [...prev, { role: 'model', content: '' }]);

      // Filter out the welcome message for the API
      const apiMessages = newMessages.filter(m => !m.isWelcome);

      const response = await fetch('/api/h01', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) {
        let serverError = 'H-01 temporarily lost connection to the neural network. Please try again.';
        try {
          const errData = await response.json();
          if (errData.error) serverError = errData.error;
        } catch(e) {
          if (response.status === 404) serverError = 'API route not found. Ensure backend is deployed at /api/h01.';
        }
        if (response.status === 429 && serverError === 'H-01 temporarily lost connection to the neural network. Please try again.') {
           throw new Error("H-01 has reached today's public capacity. The system will be available again soon.");
        }
        throw new Error(serverError);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let aiResponse = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        // Keep the last incomplete line in the buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') continue;
            try {
              const data = JSON.parse(dataStr);
              if (data.candidates && data.candidates[0].content?.parts?.[0]?.text) {
                aiResponse += data.candidates[0].content.parts[0].text;
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1].content = aiResponse;
                  return updated;
                });
              }
            } catch (err) {
              // Ignore partial JSON parsing errors
            }
          }
        }
      }
    } catch (error) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].content = `[SYSTEM ERROR] ${error.message}`;
        return updated;
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    const [copied, setCopied] = useState(false);
    const language = match ? match[1] : 'text';
    const codeString = String(children).replace(/\n$/, '');

    const handleCopy = () => {
      navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    if (inline) {
      return (
        <code className="bg-cyan-950/50 text-cyan-200 px-1 py-0.5 rounded text-[10px] font-mono border border-cyan-500/20" {...props}>
          {children}
        </code>
      );
    }

    return (
      <div className="relative my-4 rounded-lg overflow-hidden border border-white/10 bg-[#050508]">
        <div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
          <span className="text-[9px] text-cyan-500 uppercase tracking-widest font-mono">{language}</span>
          <button 
            onClick={handleCopy}
            className="text-neutral-500 hover:text-cyan-400 transition-colors focus:outline-none"
            aria-label="Copy code"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          </button>
        </div>
        <div className="overflow-x-auto p-3 text-[11px] font-mono leading-relaxed text-cyan-100/90 scrollbar-hide">
          <code {...props}>{children}</code>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* AI Energy Core Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center z-40 group focus:outline-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        {/* Outer subtle glow/pulse */}
        <motion.div 
          className={`absolute inset-0 rounded-full ${isProcessing ? 'bg-cyan-400/40' : 'bg-cyan-500/20'} blur-xl transition-colors duration-300`}
          animate={isProcessing ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: isProcessing ? 1 : 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Middle interactive ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors duration-500">
          <motion.div 
            className="w-full h-full rounded-full border-t border-cyan-300/50"
            animate={{ rotate: 360 }}
            transition={{ duration: isProcessing ? 2 : 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Inner AI Core */}
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center overflow-hidden relative"
          animate={{ 
            scale: isProcessing ? [1, 1.15, 1] : [1, 1.05, 1],
            boxShadow: [
              "0 0 15px rgba(6,182,212,0.5)",
              "0 0 25px rgba(6,182,212,0.8)",
              "0 0 15px rgba(6,182,212,0.5)"
            ]
          }}
          transition={{ duration: isProcessing ? 1.5 : 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {isProcessing && <div className="absolute inset-0 bg-white/30 animate-ping rounded-full"></div>}
          <motion.div 
            className="w-full h-full bg-white/20 blur-md rounded-full mix-blend-overlay"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: isProcessing ? 0.5 : 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-40 md:bottom-24 right-4 md:right-6 left-4 md:left-auto md:w-96 h-[60vh] md:h-96 bg-[#050508]/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl z-50 flex flex-col overflow-hidden font-mono shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Header */}
              <div className="h-12 bg-cyan-950/40 border-b border-cyan-500/30 flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest font-bold">
                  <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400 animate-pulse'}`}></div>
                  {isProcessing ? 'PROCESSING QUERY' : 'H-01 ASSISTANT'}
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors p-1">
                  <X size={16} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs scrollbar-hide flex flex-col">
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mb-4 justify-start">
                    {["Who is Hemant?", "Teach me recursion", "Explain SetuX", "Give me a riddle"].map(suggestion => (
                      <button 
                        key={suggestion}
                        onClick={() => { setInput(suggestion); }}
                        className="px-3 py-1.5 border border-cyan-500/30 rounded-full text-[10px] text-cyan-400 bg-cyan-950/30 hover:bg-cyan-500 hover:text-black transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] p-3 rounded-lg ${
                      m.role === 'user' 
                        ? 'bg-cyan-900/60 border border-cyan-500/40 text-cyan-50 rounded-br-none shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                        : 'bg-white/5 border border-white/10 text-cyan-100/90 rounded-bl-none'
                    }`}>
                      {m.role === 'user' ? (
                        <div className="whitespace-pre-wrap">{m.content}</div>
                      ) : (
                        <div className="prose prose-invert prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0 max-w-none text-xs">
                          {m.content === '' && isProcessing ? (
                            <div className="flex items-center gap-1 h-4">
                              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
                              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                            </div>
                          ) : (
                            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock, p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} /> }}>
                              {m.content}
                            </ReactMarkdown>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={endRef} className="h-1 shrink-0" />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 bg-white/[0.02] border-t border-cyan-500/20 flex gap-2 shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isProcessing}
                  maxLength={500}
                  placeholder={isProcessing ? "H-01 IS THINKING..." : "QUERY H-01..."}
                  className="flex-grow bg-[#050508] border border-cyan-500/20 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={isProcessing || !input.trim()} 
                  className="w-10 flex items-center justify-center bg-cyan-950 text-cyan-400 border border-cyan-500/40 rounded hover:bg-cyan-900 hover:text-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default H01Assistant;
