import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootScreen from './components/os/BootScreen';
import OsInterface from './components/os/OsInterface';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] font-sans text-neutral-200 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* Global OS Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,20,30,0.5)_0%,rgba(5,5,5,1)_100%)] pointer-events-none"></div>
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <AnimatePresence mode="wait">
        {!booted ? (
          <BootScreen key="boot" onComplete={() => setBooted(true)} />
        ) : (
          <OsInterface key="os" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
