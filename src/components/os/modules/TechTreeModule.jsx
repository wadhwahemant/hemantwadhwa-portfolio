import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const TechTreeModule = () => {
  const [activeNode, setActiveNode] = useState(null);

  const skills = [
    { id: 'cpp', label: 'C++ (DSA)', category: 'core', desc: 'Primary language for Data Structures and problem solving.' },
    { id: 'c', label: 'C', category: 'core', desc: 'Low-level foundations and memory management.' },
    { id: 'python', label: 'Python', category: 'core', desc: 'Scripting and early AI/ML exploration.' },
    { id: 'js', label: 'JavaScript', category: 'web', desc: 'Interactive frontend logic and full-stack capabilities.' },
    { id: 'htmlcss', label: 'HTML/CSS', category: 'web', desc: 'Structural markup and modern styling architectures.' },
    { id: 'react', label: 'React.js', category: 'web', desc: 'Component-based UI development and state management.' },
    { id: 'mysql', label: 'MySQL', category: 'data', desc: 'Relational database design and queries.' },
    { id: 'git', label: 'Git/GitHub', category: 'tools', desc: 'Version control and collaborative workflow.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl h-full flex flex-col font-mono"
    >
      <h2 className="text-2xl text-white font-bold tracking-widest uppercase mb-8 flex items-center gap-3 shrink-0">
        <span className="text-cyan-500">_</span> Tech Tree
      </h2>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Tree Visualization (2/3 width) */}
        <div className="lg:col-span-2 border border-white/10 bg-white/[0.02] rounded-xl p-8 relative flex flex-col justify-center min-h-[400px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <button
                key={skill.id}
                onMouseEnter={() => setActiveNode(skill)}
                onClick={() => setActiveNode(skill)}
                className={`px-4 py-3 rounded-lg border transition-all duration-300 text-sm tracking-wider ${
                  activeNode?.id === skill.id 
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-100 scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                    : 'border-white/10 bg-[#050505] text-neutral-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {skill.label}
              </button>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-4 text-[10px] text-neutral-600 tracking-widest uppercase">
            // INTERACT WITH NODES FOR DATA
          </div>
        </div>

        {/* Node Details (1/3 width) */}
        <div className="border border-white/10 bg-[#050505] rounded-xl p-6 flex flex-col">
          <div className="flex items-center gap-2 text-cyan-500 mb-6 border-b border-white/5 pb-4">
            <Terminal size={16} />
            <span className="text-xs font-bold tracking-widest">NODE_INSPECTOR</span>
          </div>

          {activeNode ? (
            <motion.div 
              key={activeNode.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-grow"
            >
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">SELECTED TECHNOLOGY</div>
              <h3 className="text-2xl text-white font-bold mb-4">{activeNode.label}</h3>
              
              <div className="mb-6">
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest text-neutral-300">
                  CAT: {activeNode.category}
                </span>
              </div>
              
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {activeNode.desc}
              </p>
            </motion.div>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center opacity-30">
              <div className="w-12 h-12 border border-dashed border-white rounded-full flex items-center justify-center mb-4">?</div>
              <p className="text-xs tracking-widest">AWAITING SELECTION</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TechTreeModule;
