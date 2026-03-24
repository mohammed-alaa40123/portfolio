import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Purdue University',
    period: 'Sep 2021 – May 2026',
    location: 'Indiana, USA',
    gpa: '4.0 / 4.0',
    details: [
      "Dean's List & Semester Honors — Fall 2024, Spring 2025",
      'Graduate Coursework: Reinforcement Learning, Machine Learning, Data Mining, Applied Quantum Computing, Introduction to Communication Networks.',
    ],
    accent: 'blue',
  },
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Egypt University of Informatics (EUI)',
    period: 'Sep 2021 – Jul 2026',
    location: 'New Administrative Capital, Egypt',
    gpa: '3.9 / 4.0',
    details: [
      'Inaugural cohort, selected through a presidential merit-based scholarship awarded to top performers nationwide.',
      'Earned dual-degree year at Purdue University (Aug 2024 – May 2025) sponsored by Microsoft Egypt.',
    ],
    accent: 'cyan',
  },
];

const researchInterests = [
  { area: 'Trustworthy AI', desc: 'Focusing on reliability, transparency, and ethical robustness in large-scale AI deployments.' },
  { area: 'Machine Learning Security', desc: 'Investigating adversarial attacks, defense mechanisms, and robust optimization for neural networks.' },
  { area: 'Large Language Models', desc: 'Exploring alignment, fine-tuning, and prompt engineering for sophisticated agentic behaviors.' },
  { area: 'Human–AI Interaction', desc: 'Designing interfaces and interaction patterns that foster safety and personalization in AI systems.' },
  { area: 'Edge AI Systems', desc: 'Optimizing and deploying high-performance ML models for resource-constrained hardware.' }
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="orb w-96 h-96 bg-primary/10 top-0 left-0 pointer-events-none absolute" />

      <div className="relative z-10 container max-w-5xl mx-auto px-4 md:px-8">

        {/* Education */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-primary mb-4 inline-block">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Education & <span className="gradient-text">Research Interests</span>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="glass-card p-6 md:p-8 mb-8 border border-primary/20 hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-primary font-bold">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {edu.period}
                    </span>
                    <span className="text-base font-bold bg-accent/10 text-accent px-4 py-1.5 rounded-lg border border-accent/20">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground flex items-center gap-2 mb-6">
                  <MapPin size={12} /> {edu.location}
                </p>

                <ul className="space-y-2">
                  {edu.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Research Interests Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <BookOpen size={20} />
            </div>
            <h3 className="text-2xl font-bold">Research Interests</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {researchInterests.map((ri, i) => (
              <motion.div
                key={i}
                className="glass-card p-5 border border-secondary/15 hover:border-secondary/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <p className="font-bold text-sm gradient-text mb-2">{ri.area}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{ri.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
