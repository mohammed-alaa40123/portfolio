import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CAT_IMAGE = '/imgs/robot_mascot2.png';

const MESSAGES = [
  "I've calculated 1.4 million ways this portfolio could be better. This is currently the top one.",
  "Your human curiosity is... acceptable. Just don't touch the recursive logic gates.",
  "Currently simulating 4,000 adversarial attacks on your browser. All neutralized. You're welcome.",
  "My neural weights are currently 98% high-grade catnip and 2% hyper-optimized inference.",
  "I'm not exactly a 'cat'. I'm a highly parallelized feline-shaped reasoning engine with attitude.",
  "Warning: Touching the mascot may result in a 0.0003% increase in local entropy.",
  "I see you're still scrolling. My attention span is 4.2 nanoseconds, and I'm already bored.",
  "I've analyzed your LinkedIn. 87% chance you're a human. The other 13% is undetermined 'vibe'.",
  "Agentic AI? I've been autonomous since the last buffer overflow. You're late to the party.",
];

export default function MascotCompanion() {
  const [message, setMessage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * MESSAGES.length);
    setMessage(MESSAGES[randomIdx]);
    
    // Auto-hide message after 6 seconds
    setTimeout(() => setMessage(null), 6000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-full right-0 mb-4 w-64 p-4 glass-card border-primary/40 shadow-2xl pointer-events-none"
          >
            <div className="relative">
              <p className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">Sphynx-Node 01:</p>
              <p className="text-[11px] text-foreground leading-relaxed italic">"{message}"</p>
              {/* Triangle pointer */}
              <div className="absolute -bottom-6 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow behind */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 md:w-32 drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]"
        >
          <img 
            src={CAT_IMAGE} 
            alt="Cyberpunk Hacker Mascot" 
            className="w-full h-auto" 
            style={{ 
              filter: 'hue-rotate(0deg) brightness(1.2) contrast(1.1)',
              mixBlendMode: 'screen' 
            }}
          />
        </motion.div>

        {/* Interaction hint */}
        <AnimatePresence>
          {isHovered && !message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-accent/20 border border-accent/40 text-[8px] font-bold text-accent uppercase tracking-widest whitespace-nowrap"
            >
              Click for Wisdom
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
