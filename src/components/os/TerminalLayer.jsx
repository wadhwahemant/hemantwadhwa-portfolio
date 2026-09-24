import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalLayer = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'HEMANT.OS TERMINAL v1.0.0' },
    { type: 'sys', text: 'Type "help" for a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd', text: `hemant@portfolio:~$ ${cmd}` }];
    
    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'sys', text: 'Available commands: about, skills, projects, setux, journey, contact, clear' });
        break;
      case 'about':
        newHistory.push({ type: 'sys', text: 'Hemant Wadhwa: AI/ML + Full Stack Developer. B.Tech CSE @ SRM University.' });
        break;
      case 'skills':
        newHistory.push({ type: 'sys', text: 'Core: C++ (DSA), C, Python, JavaScript, HTML, CSS, React.js, MySQL, Git.' });
        break;
      case 'projects':
        newHistory.push({ type: 'sys', text: '1. SetuX (SIH)  2. Animated Login UI. Type "setux" for details.' });
        break;
      case 'setux':
        newHistory.push({ type: 'sys', text: 'SetuX: Interoperability layer for govt services. Role: Dev/Team Lead (NationNet).' });
        break;
      case 'journey':
        newHistory.push({ type: 'sys', text: 'SIH Team Lead. Tech Team @ Free and Open Source Software Club. CGPA: 9.37.' });
        break;
      case 'contact':
        newHistory.push({ type: 'sys', text: 'GitHub: wadhwahemant | LinkedIn: hemant-wadhwa-5633b3429' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({ type: 'err', text: `Command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1/2 md:h-1/3 bg-[#050505]/95 backdrop-blur-xl border-t border-cyan-500/30 z-30 font-mono text-sm flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="h-8 bg-cyan-950/30 border-b border-cyan-500/30 flex items-center justify-between px-4 text-xs text-cyan-500 tracking-widest shrink-0">
            <span>/dev/tty1</span>
            <button onClick={onClose} className="hover:text-white transition-colors">[CLOSE]</button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-2 text-cyan-400">
            {history.map((line, i) => (
              <div key={i} className={line.type === 'err' ? 'text-red-400' : line.type === 'sys' ? 'text-neutral-400' : 'text-cyan-300'}>
                {line.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleCommand} className="flex items-center px-4 py-3 border-t border-white/5 shrink-0 bg-[#050505]">
            <span className="text-emerald-500 mr-2">hemant@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-transparent outline-none text-cyan-100"
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalLayer;
