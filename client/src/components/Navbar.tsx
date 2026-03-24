import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, GraduationCap, Trophy, Code, Mail, Sparkles, Newspaper } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Awards', href: '#awards', icon: Trophy },
  { name: 'Press', href: '#press', icon: Newspaper },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`glass-card px-6 py-2 flex items-center justify-between border-primary/20 relative overflow-hidden ${
          isScrolled ? 'shadow-lg shadow-primary/10 bg-background/80' : 'bg-transparent border-transparent'
        }`}>
          <div className="nav-scan opacity-30" />
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all">
              MA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight group-hover:gradient-text transition-all leading-none">
                Mohamed Ahmed
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-400 font-bold mt-1 inline-flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                System Status: Optimal
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-white bg-primary shadow-[0_0_15px_rgba(14,165,233,0.4)]' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                <link.icon size={12} />
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 px-4 py-4 z-40"
          >
            <div className="glass-card p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'bg-primary/15 text-primary'
                      : 'hover:bg-white/5 text-muted-foreground'
                  }`}
                >
                  <link.icon size={18} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
