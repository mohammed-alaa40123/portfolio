import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const volunteerItems = [
  {
    role: 'Event Chair — QatAIyef: AI Engineering Nights',
    org: 'AI Technical Series · Cairo, Egypt / Virtual',
    period: 'Mar 2026',
    description: 'Founded and chaired a 7-night technical series on the full AI engineering lifecycle, bringing together industry engineers and researchers on agentic AI (Google ADK), RAG systems, production deployment, and secure GenAI development.',
    link: 'https://qataiyef-ai.vercel.app/',
    linkLabel: 'qataiyef-ai.vercel.app ↗',
    accent: 'blue',
    emoji: '🤖',
  },
  {
    role: 'AI Committee President & Vice Chairman',
    org: 'IEEE Computer Society & Student Branch · Co-Founder, IEEE EUI',
    period: 'Jun 2023 – May 2025',
    description: 'Co-founded student branch, growing community to 300+ members; spearheaded the IEEE Data Science Bootcamp (500+ registrants) and directed a nationwide Kaggle competition with 30+ teams. Organized international AI hackathons and symposia, coordinated flagship IEEE conferences (JAC-ECC 2023, DSC MENA 2024, NASYP Region 8), and earned the IEEE Region 8 Exemplary Student Branch Award for 3 consecutive years.',
    link: null,
    linkLabel: null,
    accent: 'cyan',
    emoji: '⚡',
  },
  {
    role: 'Academic Service — Peer Reviewer',
    org: 'NeurIPS 2026 GlobalSouthAI Workshop',
    period: '2026',
    description: 'Serving as a peer reviewer evaluating submissions on machine learning systems, democratized AI, and low-resource adaptation for the Global South.',
    link: null,
    linkLabel: null,
    accent: 'orange',
    emoji: '📝',
  },
  {
    role: 'Teaching & Mentorship',
    org: 'Purdue University, Electro Pi & EUI',
    period: '2023 – 2025',
    description: 'Undergraduate TA for ECE 20875 Python for Data Science at Purdue (~300 students/semester); Machine Learning Instructor at Electro Pi (advanced CV, YOLO, Streamlit); Junior TA for ECE 115 Digital Systems Design at EUI.',
    link: null,
    linkLabel: null,
    accent: 'blue',
    emoji: '🎓',
  },
];

const hobbies = [
  { label: 'Competitive Programming', icon: '💻' },
  { label: 'Heterogeneous Computing & GPUs', icon: '⚡' },
  { label: 'Quantum Computing', icon: '⚛️' },
  { label: 'Open-Source & Linux', icon: '🛠️' },
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
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">Leadership & Service</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Community, Teaching & <span className="gradient-text">Service</span>
          </h2>
        </motion.div>

        {/* Volunteer cards */}
        <div className="space-y-6 mb-14">
          {volunteerItems.map((item, i) => (
            <motion.div
              key={i}
              className={`glass-card p-6 border ${
                item.accent === 'blue'
                  ? 'border-primary/25 hover:border-primary/50'
                  : item.accent === 'cyan'
                  ? 'border-secondary/25 hover:border-secondary/50'
                  : 'border-accent/25 hover:border-accent/50'
              } transition-all`}
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
                    <p className="text-sm font-medium text-primary">{item.org}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                  {item.link && (
                    <div className="mt-1">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-colors"
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
                    Visit QatAIyef Platform
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hobbies */}
        <motion.div
          className="glass-card p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Heart size={20} />
            </div>
            <h3 className="text-xl font-bold">Hobbies & Passions</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((h) => (
              <motion.span
                key={h.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 text-sm text-foreground hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
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
