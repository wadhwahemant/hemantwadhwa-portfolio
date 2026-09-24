import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-white/10 text-center">
      <p className="text-sm font-medium text-neutral-500 mb-2">
        &copy; {currentYear} Hemant Wadhwa. AI/ML + Full Stack Developer.
      </p>
      <p className="text-xs text-neutral-700">
        Engineered with React, Vite & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
