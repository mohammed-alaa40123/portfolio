import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';

const BASE = '/imgs/';

const projects = [
  {
    id: 1,
    title: 'Adversarial Robustness in LLMs',
    description: 'Led research on hybrid attack pipelines combining Greedy Coordinate Gradient (GCG) with Prompt Automatic Iterative Refinement (PAIR). Achieved 91.6% Attack Success Rate on Llama-3, a 33.2% improvement over baseline. Demonstrated these hybrid strategies reliably pierce advanced SOTA defenses.',
    image: `${BASE}project_adversarial.png`,
    tags: ['LLM Security', 'Adversarial ML', 'Research', 'Red Teaming'],
    achievements: ['91.6% ASR on Llama-3', '+33.2% over baseline', 'IEEE SecDev 2025', 'Disclosed to OpenAI & Meta'],
    links: [
      { label: 'Read Paper', icon: FileText, href: 'https://arxiv.org/abs/2506.21972' },
    ],
    accent: 'blue',
  },
  {
    id: 2,
    title: 'ICC Tutor — AI Communication System',
    description: 'Architected a conversational AI system leveraging RAG and Few-Shot Persona Adaptation for intercultural communication training. Deployed on Azure using OpenAI, LangChain, and Svelte. Tested with 25 students with highly positive psychological safety outcomes.',
    image: `${BASE}project_icc.png`,
    tags: ['RAG', 'Human-AI Interaction', 'Azure', 'HCI'],
    achievements: ['Positive feedback from 25 students', 'AAAI 2026 Poster', 'ACM IUI 2026 Submission'],
    links: [
      { label: 'Read Paper', icon: FileText, href: 'https://ojs.aaai.org/index.php/AAAI/article/view/42182' },
    ],
    accent: 'cyan',
  },
  {
    id: 3,
    title: 'GraphRAG System for Knowledge Extraction',
    description: 'Developed a robust Knowledge Graph based RAG system for intelligent retrieval. Uses Graph-context to enhance LLM generated answers beyond standard vector-only RAG. Optimized for secure local execution with privacy-preserving safeguards.',
    image: `${BASE}project_graph_rag.png`,
    tags: ['Graph Databases', 'RAG', 'Knowledge Graphs', 'Privacy'],
    achievements: ['Enhanced context-aware answers', 'Privacy-first design', 'Local execution support', 'Multi-hop reasoning'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/mohammed-alaa40123' },
    ],
    accent: 'blue',
  },
  {
    id: 4,
    title: 'NilePlateID — Egyptian License Plate AI',
    description: 'State-of-the-art license plate recognition and vehicle re-identification specifically for the Egyptian region. Employs YOLO-v10 for detection and custom OCR models optimized for Arabic calligraphy.',
    image: `${BASE}project_nile_plate.png`,
    tags: ['Computer Vision', 'YOLO v10', 'Egyptian AI', 'OCR'],
    achievements: ['98%+ Detection Rate', 'Low-latency Real-time', 'Arabic Calligraphy Support', 'SOTA vehicle re-ID'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/mohammed-alaa40123/NilePlateID' },
    ],
    accent: 'cyan',
  },
  {
    id: 5,
    title: 'OLLMCPC v2 — Multi-Agent Tool Hub',
    description: 'A version 2 of the Model Context Protocol (MCP) tool client. Bridges Large Language Models to local tools, databases, and APIs through a unified socket-based architecture. Focuses on security and tool-calling reliability.',
    image: `${BASE}project_ollmcpc.png`,
    tags: ['MCP', 'LLM Tools', 'Agentic AI', 'Backend'],
    achievements: ['Unified Tool Protocol', 'Agentic Workflow Hub', 'Zero-trust architecture', 'Python/JS SDK'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/mohammed-alaa40123/ollmcpc_v2' },
    ],
    accent: 'blue',
  },
  {
    id: 6,
    title: 'QuantumFlow — Qiskit Simulator',
    description: 'A full-stack quantum circuit simulator built on Qiskit. Provides an intuitive visual interface to architect quantum gates and monitor statevector probability amplitudes in real-time. Designed for researchers and students.',
    image: `${BASE}project_quantum.png`,
    tags: ['Quantum Computing', 'Qiskit', 'Simulation', 'Visualization'],
    achievements: ['Full circuit visualization', 'Real-time probability flux', 'Custom Gate support', 'Educational focused'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/mohammed-alaa40123/QuantumFlow' },
    ],
    accent: 'cyan',
  },
  {
    id: 7,
    title: 'Trustworthy Module Registry',
    description: 'A secure TypeScript package scorer that evaluates the risk and "trustworthiness" of open-source modules based on maintenance metrics, vulnerability history, and static analysis. Implements a multi-threaded scoring engine.',
    image: `${BASE}project_registry.png`,
    tags: ['TypeScript', 'Supply Chain Security', 'Scoring Engine', 'Security'],
    achievements: ['Integrated CVE scanner', 'Maintenance health index', 'Sub-second scoring', 'Enterprise ready'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/mohammed-alaa40123/Trustworthy-Module-Registry' },
    ],
    accent: 'blue',
  },
  {
    id: 8,
    title: 'AI Curriculum Planner',
    description: 'A DQN-based academic advisor and curriculum planner. Uses reinforcement learning to optimize course schedules based on constraints like prerequisites, interests, and difficulty balancing. Launched as a Streamlit live application.',
    image: `${BASE}project_curriculum.png`,
    tags: ['RL', 'DQN', 'Streamlit', 'EdTech'],
    achievements: ['Live Streamlit App', 'RL schedule optimization', 'Prereq-graph traversal', 'Personalized advice'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/mohammed-alaa40123/ai-curriculum-planner' },
    ],
    accent: 'cyan',
  },
];

const accentMap = {
  blue: { badge: 'badge-primary', border: 'rgba(14,165,233,0.4)', glow: 'rgba(14,165,233,0.15)', icon: 'text-blue-400' },
  cyan: { badge: 'badge-secondary', border: 'rgba(6,182,212,0.4)', glow: 'rgba(6,182,212,0.15)', icon: 'text-cyan-400' },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Decoration */}
      <div className="orb w-96 h-96 bg-primary/10 -top-20 -right-20 pointer-events-none absolute" />
      <div className="orb w-72 h-72 bg-secondary/10 bottom-0 -left-10 pointer-events-none absolute" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Research, engineering, and open-source contributions across AI, security, and quantum computing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ac = accentMap[project.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="glass-card overflow-hidden group border-white/5"
                style={{ '--accent-border': ac.border, '--accent-glow': ac.glow } as React.CSSProperties}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="img-scanline relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 h-20 overflow-hidden line-clamp-3">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.achievements.map((a) => (
                      <span key={a} className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground border border-border">
                        ✦ {a}
                      </span>
                    ))}
                  </div>

                  {/* Tags + links row */}
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`${ac.badge} text-[10px] px-2 py-0.5 rounded-full border border-primary/30 font-bold uppercase`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 transition-all hover:bg-white/5 hover:scale-105`}
                          >
                            <Icon size={12} className="text-primary" />
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
