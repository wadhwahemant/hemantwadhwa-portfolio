import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center" id="home">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Learn. Build. Iterate.
        </motion.div>
        
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineering the <span className="text-neutral-500">future</span> of software.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-neutral-400 max-w-2xl text-balance mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I'm <strong className="text-white font-medium">Hemant Wadhwa</strong>. A Computer Science student and AI/ML + Full Stack Developer, turning complex problems into elegant, scalable digital experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
            Connect With Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
