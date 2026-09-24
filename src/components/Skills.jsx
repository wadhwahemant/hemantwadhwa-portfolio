import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Core Foundations",
      skills: ["C++ (DSA)", "C", "Python", "JavaScript", "HTML", "CSS", "MySQL"]
    },
    {
      title: "Currently Building With",
      skills: ["React.js", "Git", "GitHub", "VS Code"]
    },
    {
      title: "Exploring & Deepening",
      skills: ["AI/ML Concepts", "Modern Frontend Architecture", "Full-Stack Development"]
    }
  ];

  return (
    <section className="container mx-auto px-6 max-w-5xl" id="skills">
      <motion.h2 
        className="font-display text-3xl md:text-4xl font-semibold text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Profile
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-sm text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
