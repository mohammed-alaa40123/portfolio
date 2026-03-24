import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Sparkles, FileText } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const ROBOT_MASCOT = '/imgs/robot_mascot2.png';
const PROFILE_IMAGE = '/imgs/profile_researcher.png';

const INTEREST_TITLES = [
  'Agentic AI Engineer',
  'ML Security Researcher',
  'Edge AI Systems Builder',
  'Human-Centered AI Designer',
  'ML Systems Developer',
];

function AnimatedTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % INTEREST_TITLES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-9 md:h-10 overflow-hidden mb-3">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xl md:text-2xl font-semibold gradient-text-alt absolute left-0 right-0 text-center md:text-left"
        >
          {INTEREST_TITLES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Orb decorations - Blue theme */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-primary/10 top-[-100px] left-[-150px]" />
        <div className="orb w-[400px] h-[400px] bg-secondary/10 bottom-[-100px] right-[-100px]" style={{ animationDelay: '-3s' }} />
        <div className="orb w-[300px] h-[300px] bg-accent/5 top-1/2 left-1/3" style={{ animationDelay: '-6s' }} />
      </motion.div>

      <motion.div
        className="relative z-10 container max-w-6xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left: Profile + mascot */}
          <motion.div variants={itemVariants} className="relative flex-shrink-0 flex flex-col items-center">
            {/* Profile circle - Professional Suit Headshot */}
            <div className="relative">
              <motion.div
                className="w-60 h-60 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-transparent rotate-3 hover:rotate-0 transition-transform duration-500"
                animate={{ boxShadow: ['0 0 25px rgba(14,165,233,0.3)', '0 0 50px rgba(6,182,212,0.4)', '0 0 25px rgba(14,165,233,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ background: 'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, var(--primary), var(--secondary), var(--accent)) border-box' }}
              >
                <img
                  src={PROFILE_IMAGE}
                  alt="Mohamed Ahmed"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute inset-[-15px] rounded-3xl opacity-20"
                style={{ border: '1px solid var(--primary)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              {/* Status dot */}
              <motion.div
                className="absolute bottom-6 right-6 w-5 h-5 bg-emerald-400 rounded-full border-4 border-background shadow-[0_0_15px_rgba(52,211,153,0.6)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            </motion.div>

          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Sparkles size={14} />
                Researcher · Engineer · Builder
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tighter">
              <span className="text-foreground">Mohamed</span>
              <br />
              <span className="gradient-text">Ahmed</span>
            </motion.h1>

            {/* Animated cycling title */}
            <AnimatedTitle />

            <motion.p variants={itemVariants} className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8 mt-4">
              Exploring trustworthy AI, adversarial robustness, edge AI systems, and human-AI interaction.
              Building intelligent platforms that bridge the gap between complex research and real-world impact.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 justify-center md:justify-start text-sm text-muted-foreground font-medium">
              <MapPin size={16} className="text-accent" />
              <span>Cairo, Egypt · Purdue University & EUI</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <a
                href="https://flowcv.com/resume/4dfrh1h507gm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 text-sm px-8"
              >
                <FileText size={18} />
                Resume
              </a>
              <a
                href="https://github.com/mohammed-alaa40123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-3 text-sm px-8"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedalaa4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-3 text-sm px-8"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:mohame43@purdue.edu"
                className="btn-outline inline-flex items-center gap-3 text-sm px-8 border-white/5"
              >
                <Mail size={18} />
                Get in touch
              </a>
            </motion.div>

            {/* Research interests tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Agentic AI', 'LLM Security', 'Edge AI', 'ML Systems', 'HCI', 'Adversarial ML'].map((tag) => (
                <span key={tag} className="badge-primary px-4 py-1.5 text-[10px] uppercase tracking-wider">{tag}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
