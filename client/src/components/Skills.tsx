import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Eye, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: Terminal,
    skills: ['Python', 'C', 'C++', 'CUDA', 'Rust', 'TypeScript', 'Java', 'SQL'],
    color: 'blue',
  },
  {
    category: 'Deep Learning & CV',
    icon: Eye,
    skills: ['CNN', 'LSTM', 'R-CNN', 'ResNet', 'YOLO', 'TensorFlow', 'PyTorch', 'OpenCV'],
    color: 'cyan',
  },
  {
    category: 'LLMs & Agentic AI',
    icon: Cpu,
    skills: ['Hugging Face', 'LangChain', 'RAG', 'Fine-tuning', 'MCP', 'Quantization'],
    color: 'orange',
  },
  {
    category: 'Cloud & DevOps',
    icon: Globe,
    skills: ['Azure', 'AWS', 'GCP', 'Docker', 'FastAPI', 'Streamlit', 'CI/CD'],
    color: 'blue',
  },
  {
    category: 'Data & ML',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'FAISS', 'Matplotlib'],
    color: 'cyan',
  },
  {
    category: 'Security & Research',
    icon: Shield,
    skills: ['Adversarial ML', 'Red Teaming', 'Edge AI', 'HCI', 'NLP', 'OCR'],
    color: 'orange',
  },
];

const colorMap = {
  blue: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20 hover:border-primary/40', badge: 'badge-primary' },
  cyan: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20 hover:border-secondary/40', badge: 'badge-secondary' },
  orange: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20 hover:border-accent/40', badge: 'badge-accent' },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="orb w-80 h-80 bg-primary/10 top-0 left-0 pointer-events-none absolute" />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-primary mb-4 inline-block uppercase tracking-widest">Toolkit</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            A research-oriented AI toolkit built through deep academic study and industry applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color as keyof typeof colorMap];
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                className={`glass-card p-6 border ${c.border} transition-all`}
                whileHover={{ y: -4 }}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-4`}>
                  <Icon size={20} />
                </div>
                <h3 className={`font-bold text-base mb-4 ${c.text}`}>{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={`${c.badge} text-[10px] px-2 py-0.5 rounded-full border border-primary/20 uppercase font-bold tracking-tight`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-12 glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Certifications & Specializations</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Azure AI Engineer', 'Purdue Honors Scholar', 'Microsoft Scholarship'].map((cert) => (
              <span key={cert} className="badge-primary px-4 py-1.5 text-[10px] uppercase font-bold">{cert}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
