import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section className="container mx-auto px-6 max-w-5xl" id="projects">
      <motion.h2 
        className="font-display text-3xl md:text-4xl font-semibold text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Work
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* SetuX (Featured) */}
        <motion.div 
          className="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">SIH Project • Developer & Team Lead</span>
              <h3 className="font-display text-3xl font-semibold text-white mb-4">SetuX</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                A concept focused on improving interoperability and reducing fragmentation between government digital services and portals. Built to demonstrate systems thinking and practical problem-solving for the Smart India Hackathon.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-300">Systems Design</span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-300">Problem Identification</span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-300">Product Thinking</span>
              </div>
              <a href="https://github.com/wadhwahemant/SetuX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors self-start">
                <ExternalLink size={16} /> View Repository
              </a>
            </div>
            <div className="relative h-64 md:h-auto bg-white/5 flex items-center justify-center border-l border-white/5 group-hover:bg-white/10 transition-colors duration-500">
               <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="font-display text-4xl font-bold text-white/20 mb-2">SetuX</div>
                  <div className="text-sm text-neutral-600">Interoperability Concept</div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Login */}
        <motion.div 
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Frontend Experiment</span>
          <h3 className="font-display text-2xl font-semibold text-white mb-4">Animated Login Page</h3>
          <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
            A frontend UI project focused on creating a smooth, animated login interface. Built to experiment with CSS animations, interactive states, and clean layout structures.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-300">HTML</span>
            <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-300">CSS</span>
          </div>
        </motion.div>

        {/* Currently Building */}
        <motion.div 
          className="rounded-3xl border border-dashed border-white/20 p-8 md:p-10 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
            <span className="text-white text-xl">+</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-white mb-2">Building the Next Idea</h3>
          <p className="text-neutral-500 text-sm">Actively working on new full-stack projects to push my limits.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
