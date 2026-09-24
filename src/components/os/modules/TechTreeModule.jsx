import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, FileCode, Globe, Layers, Database, GitBranch, TerminalSquare } from 'lucide-react';

const TechTreeModule = () => {
  const [activeNode, setActiveNode] = useState(null);

  const skills = [
    { id: 'cpp', label: 'C++ (DSA)', category: 'core', desc: 'Primary language for Data Structures and problem solving.', icon: <Code2 size={16} /> },
    { id: 'c', label: 'C', category: 'core', desc: 'Low-level foundations and memory management.', icon: <Cpu size={16} /> },
    { id: 'python', label: 'Python', category: 'core', desc: 'Scripting and early AI/ML exploration.', icon: <TerminalSquare size={16} /> },
    { id: 'js', label: 'JavaScript', category: 'web', desc: 'Interactive frontend logic and full-stack capabilities.', icon: <FileCode size={16} /> },
    { id: 'htmlcss', label: 'HTML/CSS', category: 'web', desc: 'Structural markup and modern styling architectures.', icon: <Globe size={16} /> },
    { id: 'react', label: 'React.js', category: 'web', desc: 'Component-based UI development and state management.', icon: <Layers size={16} /> },
    { id: 'mysql', label: 'MySQL', category: 'data', desc: 'Relational database design and queries.', icon: <Database size={16} /> },
    { id: 'git', label: 'Git/GitHub', category: 'tools', desc: 'Version control and collaborative workflow.', icon: <GitBranch size={16} /> },
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
        <div className="lg:col-span-2 border border-white/10 bg-white/[0.02] rounded-xl p-8 relative flex flex-col justify-center min-h-[400px] overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <path d="M 50% 20% L 30% 50% M 50% 20% L 50% 50% M 50% 20% L 70% 50% M 30% 50% L 30% 80% M 70% 50% L 70% 80%" stroke="cyan" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-pulse" />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-12 w-full h-full justify-center">
            {/* Tier 1: Core */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold border-b border-white/5 pb-1 w-full max-w-[200px] text-center">CORE PROTOCOLS</div>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.filter(s => s.category === 'core').map((skill) => (
                  <button
                    key={skill.id}
                    onMouseEnter={() => setActiveNode(skill)}
                    onClick={() => setActiveNode(skill)}
                    className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-300 text-xs tracking-wider relative overflow-hidden ${
                      activeNode?.id === skill.id 
                        ? 'border-cyan-400 bg-cyan-950/60 text-cyan-100 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-10' 
                        : 'border-white/10 bg-[#050505]/80 text-neutral-400 hover:border-cyan-500/50 hover:text-white'
                    }`}
                  >
                    {activeNode?.id === skill.id && <div className="absolute inset-0 bg-cyan-400/10 animate-pulse"></div>}
                    <span className="opacity-70 group-hover:opacity-100 relative z-10">{skill.icon}</span>
                    <span className="relative z-10">{skill.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tier 2: Specializations */}
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-full">
              <div className="flex flex-col items-center gap-4">
                <div className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold border-b border-white/5 pb-1">WEB SYSTEMS</div>
                <div className="flex flex-col gap-3">
                  {skills.filter(s => s.category === 'web').map((skill) => (
                    <button
                      key={skill.id}
                      onMouseEnter={() => setActiveNode(skill)}
                      onClick={() => setActiveNode(skill)}
                      className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-300 text-xs tracking-wider relative overflow-hidden ${
                        activeNode?.id === skill.id 
                          ? 'border-emerald-400 bg-emerald-950/60 text-emerald-100 scale-110 shadow-[0_0_20px_rgba(52,211,153,0.3)] z-10' 
                          : 'border-white/10 bg-[#050505]/80 text-neutral-400 hover:border-emerald-500/50 hover:text-white'
                      }`}
                    >
                      {activeNode?.id === skill.id && <div className="absolute inset-0 bg-emerald-400/10 animate-pulse"></div>}
                      <span className="opacity-70 group-hover:opacity-100 relative z-10">{skill.icon}</span>
                      <span className="relative z-10">{skill.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-[10px] text-neutral-500 tracking-widest uppercase font-bold border-b border-white/5 pb-1">DATA & TOOLS</div>
                <div className="flex flex-col gap-3">
                  {skills.filter(s => ['data', 'tools'].includes(s.category)).map((skill) => (
                    <button
                      key={skill.id}
                      onMouseEnter={() => setActiveNode(skill)}
                      onClick={() => setActiveNode(skill)}
                      className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-300 text-xs tracking-wider relative overflow-hidden ${
                        activeNode?.id === skill.id 
                          ? 'border-purple-400 bg-purple-950/60 text-purple-100 scale-110 shadow-[0_0_20px_rgba(192,132,252,0.3)] z-10' 
                          : 'border-white/10 bg-[#050505]/80 text-neutral-400 hover:border-purple-500/50 hover:text-white'
                      }`}
                    >
                      {activeNode?.id === skill.id && <div className="absolute inset-0 bg-purple-400/10 animate-pulse"></div>}
                      <span className="opacity-70 group-hover:opacity-100 relative z-10">{skill.icon}</span>
                      <span className="relative z-10">{skill.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] text-neutral-500 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
            NETWORK_ACTIVE
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
