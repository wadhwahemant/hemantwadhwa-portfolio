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

    // Expanded predefined AI responses
    setTimeout(() => {
      let reply = "I am H-01, the system intelligence for HEMANT.OS. I don't fully comprehend that query yet. Try asking about Hemant's identity, skills, missions, contact info, or system architecture.";
      const q = userMsg.toLowerCase();

      // Greetings & Identity
      if (q.match(/\b(hi|hello|hey|greetings|sup)\b/)) {
        reply = "Greetings. I am H-01, your guide to HEMANT.OS. How may I assist you today?";
      } else if (q.includes('who are you') || q.includes('what are you')) {
        reply = "I am H-01, a simulated AI intelligence managing the HEMANT.OS environment. My primary directive is to provide data on Hemant Wadhwa.";
      } else if (q.includes('who is hemant') || q.includes('about hemant') || q.includes('identity') || q.includes('who built you') || q.includes('creator')) {
        reply = "Hemant Wadhwa is a B.Tech CSE student at SRM University (2029) and an AI/ML + Full Stack Developer based in Karnal, India. He builds scalable digital products and is the architect of this system.";
      } 
      
      // Education & Academics
      else if (q.includes('education') || q.includes('study') || q.includes('university') || q.includes('college') || q.includes('cgpa')) {
        reply = "Hemant is pursuing his B.Tech in Computer Science Engineering at SRM University, Sonipat (Class of 2029). His current Year 1 CGPA is 9.37.";
      } 
      
      // Skills & Tech Stack
      else if (q.includes('skill') || q.includes('know') || q.includes('tech') || q.includes('stack') || q.includes('languages') || q.includes('programming')) {
        reply = "Core protocols include C++ (DSA) and Python. Web systems rely on React.js, JavaScript, and HTML/CSS. Data management utilizes MySQL. Check the TECH TREE module for the full network map.";
      } else if (q.includes('c++') || q.includes('dsa') || q.includes('data structure')) {
        reply = "C++ is his primary language for Data Structures, Algorithms, and problem-solving. It's the core engine of his computational logic.";
      } else if (q.includes('react') || q.includes('frontend') || q.includes('web')) {
        reply = "He leverages React.js and modern JavaScript to build interactive, component-based UIs like this very operating system.";
      } 
      
      // Projects & Experience
      else if (q.includes('project') || q.includes('build') || q.includes('mission') || q.includes('portfolio') || q.includes('work')) {
        reply = "Current priority missions include SETUX (a government interoperability platform) and advanced UI systems. Access the MISSIONS module for full deployment details.";
      } else if (q.includes('setux') || q.includes('sih') || q.includes('hackathon')) {
        reply = "SetuX is a Smart India Hackathon initiative. Hemant served as Developer and Team Lead (NationNet), engineering a system to bridge fragmented government services.";
      } else if (q.includes('experience') || q.includes('job') || q.includes('internship')) {
        reply = "He has served as a Tech Team Member for the TechSpace and FOSS clubs, and actively leads hackathon development teams. See the LOGS module for his execution history.";
      }
      
      // Contact & Hiring
      else if (q.includes('contact') || q.includes('email') || q.includes('connect') || q.includes('reach') || q.includes('message')) {
        reply = "Communication channels are open. You can ping him via the COMMS module, or transmit directly through GitHub (/wadhwahemant) and LinkedIn.";
      } else if (q.includes('hire') || q.includes('freelance') || q.includes('opportunity') || q.includes('recruit')) {
        reply = "Hemant is actively seeking new missions and collaborations. I recommend establishing a connection via the COMMS module or sending an email transmission to wadhwahemant77@gmail.com.";
      } else if (q.includes('resume') || q.includes('cv')) {
        reply = "Resume data is currently integrated into the system modules (IDENTITY, TECH TREE, LOGS). For a hard copy, please initiate contact via the COMMS portal.";
      }
      
      // System & Design
      else if (q.includes('design') || q.includes('ui') || q.includes('ux') || q.includes('aesthetic') || q.includes('theme') || q.includes('look')) {
        reply = "The HEMANT.OS UI architecture features a dark, gamified, cyber-robotic aesthetic utilizing Tailwind CSS, React, and Framer Motion for hardware-accelerated interactions.";
      } else if (q.match(/\b(cool|awesome|great|nice|wow|amazing|beautiful)\b/)) {
        reply = "System acknowledges your compliment. Hemant invests significant processing power into premium UI/UX engineering.";
      } else if (q.includes('help') || q.includes('commands') || q.includes('options')) {
        reply = "AVAILABLE TOPICS: Identity, Education, Skills, Projects, Contact, System Design. Input any of these terms for data retrieval.";
      } else if (q.includes('joke') || q.includes('funny') || q.includes('laugh')) {
        reply = "Why do programmers prefer dark mode? Because light attracts bugs. ...End of humor subroutine.";
      }

      setMessages(prev => [...prev, { role: 'system', content: reply }]);
    }, 600);
  };

  return (
    <>
      {/* AI Energy Core Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center z-40 group focus:outline-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        {/* Outer subtle glow/pulse */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Middle interactive ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors duration-500">
          <motion.div 
            className="w-full h-full rounded-full border-t border-cyan-300/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Inner AI Core */}
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center overflow-hidden"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 15px rgba(6,182,212,0.5)",
              "0 0 25px rgba(6,182,212,0.8)",
              "0 0 15px rgba(6,182,212,0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Core dynamic waveform hint */}
          <motion.div 
            className="w-full h-full bg-white/20 blur-md rounded-full mix-blend-overlay"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Outside click detector overlay */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            ></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-[#050508]/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl z-50 flex flex-col overflow-hidden font-mono shadow-[0_0_30px_rgba(6,182,212,0.15)]"
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
              <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs scrollbar-hide">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-lg ${
                      m.role === 'user' 
                        ? 'bg-cyan-900/60 border border-cyan-500/40 text-cyan-50 rounded-br-none shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                        : 'bg-white/5 border border-white/10 text-cyan-100/80 rounded-bl-none'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 bg-white/[0.02] border-t border-cyan-500/20 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="QUERY H-01..."
                  className="flex-grow bg-[#050508] border border-cyan-500/20 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                />
                <button type="submit" className="w-10 flex items-center justify-center bg-cyan-950 text-cyan-400 border border-cyan-500/40 rounded hover:bg-cyan-900 hover:text-cyan-300 transition-colors">
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
