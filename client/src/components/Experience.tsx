import { motion } from 'framer-motion';
import { Briefcase, FlaskConical, BookOpen } from 'lucide-react';

const experiences = [
  {
    type: 'research',
    title: 'Graduate Research Assistant — Mobile LLM Inference Systems',
    company: 'Purdue University, Distributed Systems & Networks Lab (DSNL)',
    location: 'West Lafayette, IN, USA',
    period: 'Aug 2026 – Present',
    description: 'Investigating mobile runtime systems, sparse MoE model execution, and heterogeneous SoC acceleration under the advisement of Prof. Y. Charlie Hu.',
    highlights: [
      'Optimized on-device MoE/LLM inference in C++/Android (llama.cpp) on Google Tensor & Qualcomm Snapdragon 8 Gen 3, achieving 3.5× faster decode (~71% latency reduction) and ~18% lower end-to-end decode energy via expert streaming, speculative prefetching, and workload-aware CPU DVFS control.',
      'Designed asynchronous expert prefetching & dynamic memory-aware cache management between UFS flash and mobile DRAM, reducing measured storage-I/O stall time by 54% during sparse MoE token generation.',
      'Using 6,000+ minutes of Qualcomm Device Cloud access, profiled on-device LLM inference across physical Snapdragon platforms, evaluating heterogeneous execution paths across Adreno GPU and Hexagon NPU.',
      'Developing a mobile MoE inference runtime for memory-constrained Android devices, instrumenting storage I/O, memory mapping (mmap), and CPU thread scheduling under tight memory budgets.',
    ],
    icon: FlaskConical,
    accent: 'blue',
    current: true,
  },
  {
    type: 'work',
    title: 'Software Engineer — AI Multi-Agent Systems & Edge AI',
    company: 'Technowelle GmbH',
    location: 'Cairo, Egypt',
    period: 'Jul 2025 – Jul 2026',
    description: 'Architected end-to-end edge voice intelligence pipelines and quantized LLMs across embedded hardware.',
    highlights: [
      'Edge Voice Assistant: Architected end-to-end edge voice pipeline (VAD → ASR → LLM → TTS) for Egyptian Arabic on Khadas VIM4 (8 GB RAM, 3.2-TOPS NPU) using INT4/INT8 quantization for real-time execution.',
      'Edge LLM Quantization: Quantized and deployed compact LLMs using GGUF/AWQ, shrinking model size and latency by 85%+ with minimal perplexity degradation across embedded platforms.',
      'Quran/Tajweed ASR: Fine-tuned Wav2Vec2-BERT CTC (~2.3 GB) on PyTorch & Hugging Face; resolved >2 GB ONNX external-data export and CPU quantization bottlenecks.',
      'Smart-Home & MCP: Implemented local automation via Home Assistant, Wyoming Protocol, Docker, Model Context Protocol (MCP), and GraphRAG over 100+ embedded specs.',
    ],
    icon: Briefcase,
    accent: 'cyan',
    current: false,
  },
  {
    type: 'research',
    title: 'LLM Security Researcher (Undergraduate VIP)',
    company: 'Purdue University (Advisor: Prof. James Davis)',
    location: 'West Lafayette, IN, USA',
    period: 'Aug 2024 – May 2025',
    description: 'Executed sophisticated adversarial attacks against SOTA language models, discovering critical alignment vulnerabilities and disclosing them to major AI labs.',
    highlights: [
      'Led 4-member research team developing hybrid jailbreak attacks combining GCG and PAIR algorithms to expose alignment vulnerabilities.',
      'Achieved 91.6% Attack Success Rate on Llama-3 (+33.2% above PAIR baseline) while bypassing SOTA defenses including Gradient Cuff and JBShield.',
      'Benchmarked 4 LLMs across 3 attack/defense methodologies using SorryBench; reported findings through OpenAI and Meta responsible disclosure programs. Published in IEEE SecDev 2025.',
    ],
    icon: FlaskConical,
    accent: 'blue',
    current: false,
  },
  {
    type: 'research',
    title: 'Research Assistant for Human-AI Interaction',
    company: 'Purdue University, College of Liberal Arts (Advisor: Prof. Hyesun Choung)',
    location: 'West Lafayette, IN, USA',
    period: 'Dec 2024 – May 2025',
    description: 'Architected ICC Tutor, a conversational AI system for intercultural communication training using RAG and Few-Shot Persona Adaptation.',
    highlights: [
      'Architected conversational AI system leveraging RAG, Few-Shot Persona Adaptation, and a dual-module framework deployed on Azure with OpenAI, LangChain, Svelte, and TypeScript.',
      'Evaluated with 25 students in university communication courses with highly positive feedback; qualitative analysis affirmed non-judgmental AI agent fostered high psychological safety.',
      'Published at AAAI 2026 (Student Abstract and Poster Program).',
    ],
    icon: FlaskConical,
    accent: 'cyan',
    current: false,
  },
  {
    type: 'work',
    title: 'Machine Learning Engineer Intern — Computer Vision',
    company: 'Electro Pi',
    location: 'Cairo, Egypt',
    period: 'Mar 2024 – Aug 2024',
    description: 'Implemented high-accuracy Arabic OCR systems and large-scale action recognition pipelines.',
    highlights: [
      'Implemented high-accuracy Arabic OCR for ancient manuscripts combining CNN–Transformer with character-level modeling, achieving 60% accuracy improvement over Tesseract.',
      'Built action recognition pipelines using MMAction2 and YOLOv8 with temporal convolutional networks (TCNs) and 3D CNNs for industrial collision detection.',
    ],
    icon: Briefcase,
    accent: 'blue',
    current: false,
  },
  {
    type: 'teaching',
    title: 'Undergraduate Teaching Assistant — Python for Data Science',
    company: 'Purdue University (Instructor: Prof. Qiang Qiu)',
    location: 'West Lafayette, IN, USA',
    period: 'Aug 2024 – May 2025',
    description: 'Supported ECE 20875: Python for Data Science (~300 students/semester).',
    highlights: [
      'Supported labs and office hours for ~300 students/semester in Python, NumPy, pandas, regular expressions, and data structures.',
      'Mentored students on homework assignments and hands-on data science final projects.',
    ],
    icon: BookOpen,
    accent: 'cyan',
    current: false,
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
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                          {exp.current && (
                            <span className="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active Research
                            </span>
                          )}
                        </div>
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
