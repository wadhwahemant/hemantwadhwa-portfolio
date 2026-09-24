import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const BootScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { delay: 800, next: 1 }, // Initialize
      { delay: 1200, next: 2 }, // Detect identity
      { delay: 1500, next: 3 }, // Show enter button
    ];

    if (step < sequence.length) {
      const timer = setTimeout(() => {
        setStep(sequence[step].next);
      }, sequence[step].delay);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <motion.div 
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] p-6"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-2xl w-full flex flex-col gap-6 font-mono text-sm md:text-base text-cyan-500/80">
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="flex items-center gap-3 border-b border-cyan-900/50 pb-2 mb-4"
        >
          <Terminal size={18} />
          <span>SYSTEM_BOOT_SEQUENCE</span>
        </motion.div>

        {/* Step 0 */}
        <div className="space-y-2">
          <p className="typing-effect">INITIALIZING SYSTEM CORE...</p>
          <p className="typing-effect delay-200">LOADING UI FRAMEWORK [REACT_VITE]...</p>
          <p className="typing-effect delay-400">ESTABLISHING NEURAL LINK...</p>
        </div>

        {/* Step 1 */}
        {step >= 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-2 mt-4 text-emerald-500/80"
          >
            <p>&gt; LINK ESTABLISHED.</p>
            <p className="typing-effect">&gt; SCANNING IDENTITY MATRIX...</p>
          </motion.div>
        )}

        {/* Step 2 */}
        {step >= 2 && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="mt-6 border-l-2 border-cyan-500 pl-4 py-2"
          >
            <p className="text-white font-bold tracking-widest mb-1 text-lg">IDENTITY DETECTED:</p>
            <p className="text-cyan-400 text-2xl font-display font-medium tracking-tight mb-2">HEMANT WADHWA</p>
            <p className="text-neutral-400 text-xs tracking-widest uppercase">AI/ML + Full Stack Developer</p>
            <p className="text-neutral-500 text-xs tracking-widest uppercase mt-1">LOC: Karnal, IN // SYS: Active</p>
          </motion.div>
        )}

        {/* Step 3 */}
        {step >= 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={onComplete}
              className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase text-sm hover:bg-cyan-900/50 hover:border-cyan-400 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <span className="relative flex items-center gap-3">
                [ ENTER HEMANT.OS ]
                <span className="animate-pulse">_</span>
              </span>
            </button>
          </motion.div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid transparent;
          animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: rgba(6, 182, 212, 0.8) }
        }
        .delay-200 { animation-delay: 200ms, 200ms; animation-fill-mode: both; }
        .delay-400 { animation-delay: 400ms, 400ms; animation-fill-mode: both; }
      `}} />
    </motion.div>
  );
};

export default BootScreen;
