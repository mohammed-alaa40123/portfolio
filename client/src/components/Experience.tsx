import { motion } from 'framer-motion';
import { Briefcase, FlaskConical, BookOpen } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'AI SWE Intern — Multi-Agent Systems',
    company: 'Technowelle GmbH (NDA)',
    location: 'Cairo, Egypt',
    period: 'Jul 2025 – Present',
    description: 'Architecting secure Multi-Agent Agentic pipelines operating in confidential environments. Developing on-edge NLP systems and knowledge-graph retrieval modules for embedded domain intelligence.',
    highlights: [
      'Built GraphRAG-based retrieval system boosting contextual precision by ~30%',
      'Deployed on-device multilingual voice assistant using NER + fine-tuned LLMs',
      'Achieved 85%+ latency reduction through LLM quantization for edge deployment',
      'Integrated Model Context Protocols for cooperative multi-agent reasoning',
    ],
    icon: Briefcase,
    accent: 'blue',
  },
  {
    type: 'research',
    title: 'Security Researcher — LLM Red Teaming',
    company: 'Purdue VIP Duality Lab',
    location: 'Indiana, USA',
    period: 'Aug 2024 – May 2025',
    description: 'Executed sophisticated adversarial attacks against SOTA language models, discovering critical alignment vulnerabilities and disclosing them to major AI labs.',
    highlights: [
      'Led research on hybrid GCG + PAIR attacks piercing SOTA defenses',
      'Achieved 91.6% ASR on Llama-3 (33.2% improvement over baseline)',
      'Published findings at IEEE SecDev 2025; disclosed to OpenAI & Meta',
    ],
    icon: FlaskConical,
    accent: 'cyan',
  },
  {
    type: 'research',
    title: 'Research Assistant — Human-AI Interaction',
    company: 'Purdue University',
    location: 'Indiana, USA',
    period: 'Dec 2024 – May 2025',
    description: 'Architected ICC Tutor, a conversational AI system for intercultural communication training using RAG and Few-Shot Persona Adaptation.',
    highlights: [
      'Deployed on Azure with OpenAI, LangChain, and Svelte',
      'Tested with 25 students; highly positive psychological safety outcomes',
      'Paper submitted to ACM IUI 2026; poster accepted at AAAI 2026',
    ],
    icon: FlaskConical,
    accent: 'blue',
  },
  {
    type: 'work',
    title: 'ML Engineer Intern — Computer Vision',
    company: 'Electro Pi',
    location: 'Cairo, Egypt',
    period: 'Mar 2024 – Aug 2024',
    description: 'Implemented Arabic OCR systems and action recognition pipelines for industrial applications.',
    highlights: [
      '60% accuracy improvement over Tesseract baseline for Arabic OCR',
      'Built action recognition using MMAction2 + YOLOv8 + TCNs',
      'Delivered ML instruction to 20+ students on advanced CV models',
    ],
    icon: Briefcase,
    accent: 'cyan',
  },
  {
    type: 'teaching',
    title: 'Undergraduate Teaching Assistant',
    company: 'Purdue University',
    location: 'Indiana, USA',
    period: 'Aug 2024 – May 2025',
    description: 'Supported ECE 20875: Python for Data Science (~300 students/semester).',
    highlights: [
      'Hosted labs and office hours for 300+ students',
      'Taught Python, NumPy, Pandas, and data science fundamentals',
    ],
    icon: BookOpen,
    accent: 'blue',
  },
];

const accentStyles = {
  blue: { dot: 'border-primary', shadow: 'rgba(14,165,233,0.4)', iconBg: 'bg-primary/10 text-primary', border: 'border-primary/20' },
  cyan: { dot: 'border-secondary', shadow: 'rgba(6,182,212,0.4)', iconBg: 'bg-secondary/10 text-secondary', border: 'border-secondary/20' },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-muted/10">
      <div className="orb w-80 h-80 bg-primary/10 top-0 right-0 pointer-events-none absolute" style={{ animationDelay: '-2s' }} />

      <div className="relative z-10 container max-w-4xl mx-auto px-4 md:px-8">
        
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16">
          {/* Vertical Line */}
          <div className="timeline-line bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const styles = accentStyles[exp.accent as keyof typeof accentStyles];
              const Icon = exp.icon;
              return (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot on the timeline */}
                  <div
                    className={`timeline-dot absolute -left-12 md:-left-16 ${styles.dot} bg-background border-2 z-10`}
                    style={{ boxShadow: `0 0 15px ${styles.shadow}` }}
                  >
                    <Icon size={18} className={styles.iconBg.split(' ')[1]} />
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`glass-card p-6 border ${styles.border}`}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                        <p className={`text-sm font-semibold ${styles.iconBg.split(' ')[1]}`}>{exp.company}</p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground whitespace-nowrap">
                        <p className="font-medium">{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${styles.iconBg.split(' ')[1].replace('text-', 'bg-')}`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
