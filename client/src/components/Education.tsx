import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Ph.D. in Electrical and Computer Engineering',
    institution: 'Purdue University',
    period: 'Aug 2026 – Present (Expected May 2031)',
    location: 'West Lafayette, IN, USA',
    badge: 'Ph.D. Researcher',
    badgeColor: 'border-primary/40 bg-primary/10 text-primary',
    advisor: 'Advisor: Prof. Y. Charlie Hu (DSNL Lab)',
    focus: 'On-device LLM/MoE inference, mobile runtime systems, heterogeneous SoC acceleration.',
    details: [
      'Researching in the Distributed Systems & Networks Lab (DSNL) under Prof. Y. Charlie Hu.',
      'Optimizing sparse MoE & LLM inference on mobile platforms (Google Tensor, Qualcomm Snapdragon 8 Gen 3) using C++ / Android (llama.cpp).',
      'Architecting speculative prefetching, memory-aware DRAM/UFS caching, and heterogeneous CPU/GPU/NPU scheduling under tight memory budgets.',
    ],
    accent: 'blue',
    isPhd: true,
  },
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Purdue University',
    period: 'Sep 2021 – May 2026',
    location: 'West Lafayette, IN, USA',
    gpa: '4.0 / 4.0',
    badge: "Dean's List & Honors (4.0)",
    badgeColor: 'border-accent/30 bg-accent/10 text-accent',
    details: [
      "Maintained a perfect 4.0/4.0 GPA; Dean's List & Semester Honors (Fall 2024, Spring 2025).",
      'Relevant & Graduate Coursework: Operating Systems, Machine Learning, Reinforcement Learning, Artificial Intelligence, Data Mining, Applied Quantum Computing, Communication Networks.',
    ],
    accent: 'cyan',
    isPhd: false,
  },
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Egypt University of Informatics (EUI)',
    period: 'Sep 2021 – Jun 2026',
    location: 'Cairo, Egypt',
    gpa: '3.9 / 4.0',
    badge: 'Top ~30 Nationwide (out of 650k)',
    badgeColor: 'border-secondary/30 bg-secondary/10 text-secondary',
    details: [
      'Inaugural cohort, selected among ~30 students nationwide through a presidential merit-based scholarship awarded to the top high-school performers out of ~650,000 students across Egypt.',
      'Earned dual-degree year at Purdue University (Aug 2024 – May 2025) fully sponsored by Microsoft Egypt.',
    ],
    accent: 'blue',
    isPhd: false,
  },
];

const researchInterests = [
  { area: 'On-Device AI & Mobile Inference', desc: 'Memory-efficient execution of generative models and sparse MoEs directly on consumer mobile devices.' },
  { area: 'LLM Inference Systems', desc: 'Accelerating decoding throughput, KV-cache optimization, and speculative prefetching pipelines.' },
  { area: 'Runtime & Systems Optimization', desc: 'Android OS/NDK, Linux kernel internals, UFS I/O, mmap, and thread scheduling under tight memory budgets.' },
  { area: 'Heterogeneous SoC Acceleration', desc: 'Profiling and scheduling execution paths across mobile CPUs (DVFS), Adreno GPUs, and Hexagon NPUs.' },
  { area: 'Trustworthy AI & LLM Security', desc: 'Adversarial attacks (GCG/PAIR), alignment vulnerability discovery, and defense benchmarking.' },
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
            className={`glass-card p-6 md:p-8 mb-8 border transition-all duration-300 ${
              edu.isPhd 
                ? 'border-primary/40 shadow-[0_0_30px_rgba(14,165,233,0.15)] bg-primary/[0.03]' 
                : 'border-primary/20 hover:border-primary/50'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                edu.isPhd ? 'bg-primary/20 text-primary shadow-[0_0_20px_rgba(14,165,233,0.4)]' : 'bg-primary/10 text-primary'
              }`}>
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{edu.degree}</h3>
                      {edu.isPhd && (
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Active Degree
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-bold">{edu.institution}</p>
                    {edu.advisor && (
                      <p className="text-xs text-foreground/90 font-medium mt-1">
                        🎓 <span className="text-secondary">{edu.advisor}</span>
                      </p>
                    )}
                    {edu.focus && (
                      <p className="text-xs text-muted-foreground mt-1">
                        <strong className="text-foreground/80">Focus:</strong> {edu.focus}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {edu.period}
                    </span>
                    {edu.badge && (
                      <span className={`text-xs md:text-sm font-bold px-3 py-1 rounded-lg border ${edu.badgeColor}`}>
                        {edu.badge}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground flex items-center gap-2 mb-4">
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
