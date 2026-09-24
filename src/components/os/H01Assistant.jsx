import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Send } from 'lucide-react';

const H01Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'H-01 ONLINE. How can I assist with HEMANT.OS?' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    // Predefined AI responses based on keywords
    setTimeout(() => {
      let reply = "I am H-01. I can provide information on Hemant's identity, skills, projects, and logs. Try asking 'Who is Hemant?', 'Show projects', or 'Contact'.";
      const q = userMsg.toLowerCase();

      if (q.includes('who') || q.includes('about') || q.includes('identity')) {
        reply = "Hemant Wadhwa is a B.Tech CSE student at SRM University (2029) and an AI/ML + Full Stack Developer based in Karnal, India. He builds scalable digital products.";
      } else if (q.includes('project') || q.includes('build') || q.includes('mission')) {
        reply = "His priority mission is SETUX, an interoperability concept for government portals. He also built an Animated Login UI. You can view these in the MISSIONS module.";
      } else if (q.includes('setux')) {
        reply = "SetuX is a Smart India Hackathon project. Hemant was the Developer and Team Lead (NationNet). It aims to reduce fragmentation between government services.";
      } else if (q.includes('skill') || q.includes('know') || q.includes('tech')) {
        reply = "He focuses on C++ (DSA), Python, React.js, and Full-Stack architecture. Check the TECH TREE for a complete map.";
      } else if (q.includes('learn') || q.includes('currently')) {
        reply = "Currently prioritizing Data Structures in C++, React.js, and building long-term AI/ML engineering foundations.";
      } else if (q.includes('contact') || q.includes('email') || q.includes('connect')) {
        reply = "You can establish a connection via the COMMS module, or directly on GitHub (/wadhwahemant) and LinkedIn.";
      }

      setMessages(prev => [...prev, { role: 'system', content: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Bot Icon */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-cyan-950 border-2 border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 z-40 hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative">
          {/* Robot eyes */}
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-[#050505] border border-cyan-500/50 rounded-2xl z-50 flex flex-col overflow-hidden font-mono shadow-2xl"
          >
            {/* Header */}
            <div className="h-12 bg-cyan-950/40 border-b border-cyan-500/30 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest font-bold">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                H-01 ASSISTANT
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-lg ${
                    m.role === 'user' 
                      ? 'bg-cyan-900/40 border border-cyan-500/20 text-white rounded-br-none' 
                      : 'bg-white/5 border border-white/10 text-cyan-50 rounded-bl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white/[0.02] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="QUERY H-01..."
                className="flex-grow bg-[#050505] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/50"
              />
              <button type="submit" className="w-10 flex items-center justify-center bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded hover:bg-cyan-900 transition-colors">
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default H01Assistant;
