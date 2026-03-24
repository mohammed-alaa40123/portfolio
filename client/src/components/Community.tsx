import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const volunteerItems = [
  {
    role: 'Event Chair — Qataiyef AI Conference',
    org: 'IEEE Student Branch · Egypt University of Informatics',
    period: '2024 – 2025',
    description: 'Led the organization of the Qataiyef AI event, bringing together researchers, practitioners, and students across Egypt to explore applied AI. Coordinated sessions on Agentic AI, security, and HCI.',
    link: 'https://qataiyef-ai.vercel.app/',
    linkLabel: 'Conference Website ↗',
    accent: 'violet',
    emoji: '🤖',
  },
  {
    role: 'IEEE Member & Volunteer',
    org: 'IEEE Student Branch · Egypt University of Informatics',
    period: '2022 – Present',
    description: 'Active contributor in organizing technical workshops, seminars, and hackathons for the student tech community.',
    link: null,
    linkLabel: null,
    accent: 'pink',
    emoji: '⚡',
  },
];

const hobbies = [
  { label: 'Competitive Programming', icon: '💻' },
  { label: 'Quantum Computing', icon: '⚛️' },
  { label: 'Open Source', icon: '🛠️' },
  { label: 'Teaching & Mentoring', icon: '📚' },
  { label: 'Science Fiction', icon: '🚀' },
  { label: 'Chess', icon: '♟️' },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 overflow-hidden bg-muted/20">
      <div className="orb w-80 h-80 bg-secondary/10 top-0 right-0 pointer-events-none absolute" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 container max-w-5xl mx-auto px-4 md:px-8">

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">Beyond the Code</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Community & <span className="gradient-text">Interests</span>
          </h2>
        </motion.div>

        {/* Volunteer cards */}
        <div className="space-y-6 mb-14">
          {volunteerItems.map((item, i) => (
            <motion.div
              key={i}
              className={`glass-card p-6 border ${item.accent === 'violet' ? 'border-violet-500/25 hover:border-violet-500/50' : 'border-pink-500/20 hover:border-pink-500/40'} transition-all`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{item.role}</h3>
                    <p className={`text-sm font-medium text-primary`}>{item.org}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                  {item.link && (
                    <div className="mt-1">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-semibold ${item.accent === 'violet' ? 'text-violet-400 hover:text-violet-300' : 'text-pink-400 hover:text-pink-300'} transition-colors`}
                      >
                        <ExternalLink size={11} />
                        {item.linkLabel}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              {item.link && (
                <div className="mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs inline-flex items-center gap-2 py-2 px-4"
                  >
                    <ExternalLink size={13} />
                    Visit Qataiyef AI
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hobbies */}
        <motion.div
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Heart size={20} />
            </div>
            <h3 className="text-xl font-bold">Hobbies & Interests</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((h) => (
              <motion.span
                key={h.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border text-sm text-foreground"
                whileHover={{ scale: 1.05, borderColor: 'rgba(168,85,247,0.5)' }}
                transition={{ duration: 0.15 }}
              >
                <span>{h.icon}</span>
                {h.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
