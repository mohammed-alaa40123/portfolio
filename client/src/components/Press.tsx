import { motion } from 'framer-motion';
import { ExternalLink, Newspaper } from 'lucide-react';

const newsItems = [
  {
    title: "Mohamed Alaa Achieves Major Wins at AAAI 2026 Singapore",
    source: "EUI News",
    date: "Jan 2026",
    link: "https://eui.edu.eg/news/mohamed-alaa-achieves-major-wins-aaai-2026-singapore",
    desc: "Recognition for outstanding contributions to Artificial Intelligence research at the prestigious AAAI conference."
  },
  {
    title: "EUI Student Mohamed Alaa Excels at Purdue University",
    source: "EUI News",
    date: "2025",
    link: "https://eui.edu.eg/news/eui-student-mohamed-alaa-excels-purdue-university",
    desc: "Highlighting academic excellence and research impact during the dual-degree program at Purdue."
  }
];

export default function Press() {
  return (
    <section id="press" className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div 
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Newspaper size={20} />
          </div>
          <h2 className="text-3xl font-bold">Featured <span className="gradient-text">In The Press</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 block group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                  {item.source}
                </span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.desc}
              </p>
              <span className="text-xs text-muted-foreground font-mono">
                {item.date}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
