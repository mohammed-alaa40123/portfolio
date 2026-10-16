import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, Award, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface Publication {
  id: string;
  tag: string;
  conference: string;
  location: string;
  year: string;
  title: string;
  authors: string;
  award?: string;
  summary: string;
  tags: string[];
  arxivUrl?: string;
  paperUrl?: string;
  bibtex: string;
}

const publications: Publication[] = [
  {
    id: 'secdev25',
    tag: "SecDev '25",
    conference: 'IEEE Secure Development Conference (SecDev 2025)',
    location: 'Indianapolis, USA',
    year: '2025',
    title: 'Advancing Jailbreak Strategies: A Hybrid Approach to Exploiting LLM Vulnerabilities and Bypassing Modern Defense',
    authors: 'Mohamed Ahmed et al.',
    summary:
      'Engineered hybrid attack pipelines integrating Greedy Coordinate Gradient (GCG) with Prompt Automatic Iterative Refinement (PAIR). Achieved 91.6% Attack Success Rate on Llama-3 (+33.2% over PAIR baseline) and reliably bypassed SOTA defenses (Gradient Cuff & JBShield). Uncovered transferable safety weaknesses responsibly reported to OpenAI and Meta bug bounty programs.',
    tags: ['LLM Security', 'Adversarial ML', 'Red Teaming', 'Safety Alignment'],
    arxivUrl: 'https://arxiv.org/abs/2506.21972',
    bibtex: `@inproceedings{ahmed2025advancing,
  title={Advancing Jailbreak Strategies: A Hybrid Approach to Exploiting LLM Vulnerabilities and Bypassing Modern Defense},
  author={Ahmed, Mohamed and others},
  booktitle={IEEE Secure Development Conference (SecDev)},
  year={2025},
  organization={IEEE},
  note={Poster Track, Indianapolis, USA}
}`,
  },
  {
    id: 'aaai26',
    tag: "AAAI '26",
    conference: 'AAAI 2026 EGSAI Workshop — Student Abstract & Poster Program',
    location: 'Singapore',
    year: '2026',
    title: 'Adaptive AI for Personalized Intercultural Communication Education: A Conversational Agent Powered by Retrieval-Augmented Generation',
    authors: 'Mohamed Ahmed et al.',
    award: '🏆 Best Student Poster Award & 3-Minute Thesis (3MT) Contest Winner',
    summary:
      'Architected the ICC Tutor conversational AI leveraging RAG, Few-Shot Persona Adaptation, and a dual-module framework for psychologically safe intercultural communication training. Tested with 25 students; qualitative LLM-as-a-judge analysis demonstrated marked increases in engagement and psychological comfort.',
    tags: ['Conversational AI', 'RAG', 'Human-AI Interaction (HCI)', 'Education'],
    paperUrl: 'https://ojs.aaai.org/index.php/AAAI/article/view/42182',
    bibtex: `@inproceedings{ahmed2026adaptive,
  title={Adaptive AI for Personalized Intercultural Communication Education: A Conversational Agent Powered by Retrieval-Augmented Generation},
  author={Ahmed, Mohamed and others},
  booktitle={AAAI 2026 EGSAI Workshop},
  year={2026},
  address={Singapore}
}`,
  },
];

export default function Publications() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="relative py-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="orb w-96 h-96 bg-primary/10 top-1/4 right-0 pointer-events-none absolute" />

      <div className="relative z-10 container max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">
            Peer-Reviewed Research
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Selected <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
            Contributions to on-device systems, LLM adversarial robustness, and human-centered AI published in top computer science venues.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              className="glass-card p-6 md:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                    {pub.tag}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                    <BookOpen size={14} className="text-secondary" />
                    {pub.conference} · {pub.location}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  {pub.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-snug">
                {pub.title}
              </h3>

              {/* Authors */}
              <p className="text-sm text-foreground/80 mb-3 font-medium">
                <span className="text-primary font-bold">Mohamed Ahmed</span>
                {pub.authors.replace('Mohamed Ahmed', '')}
              </p>

              {/* Award Banner if present */}
              {pub.award && (
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs font-bold">
                  <Award size={15} />
                  <span>{pub.award}</span>
                </div>
              )}

              {/* Summary */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {pub.summary}
              </p>

              {/* Tags & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {pub.arxivUrl && (
                    <a
                      href={pub.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs inline-flex items-center gap-2 py-2 px-4 hover:border-primary"
                    >
                      <ExternalLink size={13} />
                      arXiv:2506.21972
                    </a>
                  )}

                  {pub.paperUrl && (
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs inline-flex items-center gap-2 py-2 px-4 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                    >
                      <FileText size={13} />
                      View Paper
                    </a>
                  )}

                  <button
                    onClick={() => handleCopy(pub.id, pub.bibtex)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-muted-foreground hover:text-foreground border border-white/10 transition-colors"
                    title="Copy BibTeX Citation"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>BibTeX</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
