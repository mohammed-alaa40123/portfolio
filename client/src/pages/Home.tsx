import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Awards from '@/components/Awards';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Community from '@/components/Community';
import Press from '@/components/Press';
import Contact from '@/components/Contact';
import MascotCompanion from '@/components/MascotCompanion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Awards />
        <Press />
        <Skills />
        <Community />
        <Contact />
      </main>
      
      <MascotCompanion />

      <footer className="border-t border-border/50 py-8">
        <div className="container max-w-6xl mx-auto px-4 md:px-8 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 <span className="text-foreground font-semibold">Mohamed Ahmed</span>. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
            <span>Agentic AI</span>
            <span>·</span>
            <span>ML Security</span>
            <span>·</span>
            <span>Edge AI</span>
            <span>·</span>
            <span>HCI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
