import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const experiences = [
    {
      date: "Smart India Hackathon",
      title: "NationNet Team Lead & Developer",
      role: "SetuX Project",
      desc: "Led a team and developed a conceptual solution addressing interoperability challenges in government digital services."
    },
    {
      date: "SRM University",
      title: "Free and Open Source Software Club",
      role: "Tech Team Member",
      desc: "Collaborating with peers on open-source initiatives and expanding technical knowledge."
    },
    {
      date: "SRM University",
      title: "TechSpace Club",
      role: "Tech Team Member",
      desc: "Engaging in technical events and building practical projects alongside a community of developers."
    }
  ];

  return (
    <section className="container mx-auto px-6 max-w-5xl" id="journey">
      <div className="grid md:grid-cols-[1fr_300px] gap-12 lg:gap-24">
        <div>
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-semibold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Leadership & Community
          </motion.h2>
          
          <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-10 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 md:pl-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="absolute -left-[41px] md:-left-[45px] top-1 w-5 h-5 rounded-full bg-[#0a0a0a] border-4 border-white/20 shadow-[0_0_0_4px_#0a0a0a]"></div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">{exp.date}</div>
                <h3 className="font-display text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <div className="text-sm font-medium text-neutral-300 mb-3">{exp.role}</div>
                <p className="text-neutral-400 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 mt-4 md:mt-24">
            <h3 className="font-display text-xl font-semibold text-white mb-2">SRM University, Sonipat</h3>
            <p className="text-neutral-500 text-sm mb-8">B.Tech in Computer Science & Engineering • Expected July 2029</p>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">First Year CGPA</span>
                <span className="font-display text-2xl font-bold text-white">9.37</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Sem 2 SGPA</span>
                <span className="font-display text-xl font-semibold text-neutral-300">9.50</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Sem 1 SGPA</span>
                <span className="font-display text-xl font-semibold text-neutral-300">9.23</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
