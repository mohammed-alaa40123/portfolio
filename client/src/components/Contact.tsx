import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'mohame43@purdue.edu', href: 'mailto:mohame43@purdue.edu' },
  { icon: Github, label: 'GitHub', value: 'mohammed-alaa40123', href: 'https://github.com/mohammed-alaa40123' },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/mohammedalaa4', href: 'https://www.linkedin.com/in/mohammedalaa4' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="orb w-96 h-96 bg-primary/10 -bottom-20 -left-20 pointer-events-none absolute" />
      <div className="orb w-72 h-72 bg-secondary/5 top-0 right-0 pointer-events-none absolute" style={{ animationDelay: '-5s' }} />

      <div className="relative z-10 container max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">Let's Talk</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            Open to research collaborations, internship opportunities, and interesting AI conversations.
            Feel free to reach out — I typically respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.href}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="glass-card p-6 group flex flex-col items-center gap-3 no-underline border-white/5 hover:border-primary/30"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{c.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5 break-all">{c.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:mohame43@purdue.edu" className="btn-primary inline-flex items-center gap-2 group">
            <Sparkles size={16} className="group-hover:animate-spin-slow" />
            Say Hello
          </a>
          <a href="https://www.linkedin.com/in/mohammedalaa4" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-[11px] text-muted-foreground flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MapPin size={12} className="text-accent" /> Cairo, Egypt · Available for remote collaboration worldwide
        </motion.p>
      </div>
    </section>
  );
}
