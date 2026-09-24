import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="container mx-auto px-6 max-w-5xl" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">Who I Am</h2>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              I am a B.Tech CSE student at <strong className="text-white font-medium">SRM University, Sonipat</strong>, developing strong foundations in programming, data structures, and modern web development.
            </p>
            <p>
              My interest lies in building scalable software products that solve real-world problems. Whether it's crafting an intuitive frontend or architecting a robust backend system, I enjoy turning technical ideas into tangible solutions.
            </p>
            <p>
              Beyond coursework, I actively explore the intersection of <strong className="text-white font-medium">AI/ML and Full-Stack Architecture</strong>. I value consistency, curiosity, and continuous improvement.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative h-[400px] w-full rounded-3xl border border-white/10 bg-white/[0.02] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
          {/* Abstract representation */}
          <div className="relative z-10 w-24 h-24 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/80 blur-sm"></div>
          </div>
          <div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
