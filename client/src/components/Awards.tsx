import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const awards = [
  {
    title: 'AAAI-2026 Student Scholar',
    org: 'Association for the Advancement of Artificial Intelligence',
    year: '2026',
    desc: 'Awarded for research excellence and poster presentation at the AAAI Conference.',
    icon: Star,
    color: 'blue'
  },
  {
    title: 'ECPC Finalist',
    org: 'Egyptian Collegiate Programming Contest',
    year: '2024',
    desc: 'Ranked among top competitive programmers in Egypt.',
    icon: Trophy,
    color: 'orange'
  },
  {
    title: 'Full Microsoft Merit Scholarship',
    org: 'Microsoft & EUI',
    year: '2022 – 2026',
    desc: 'Prestigious full scholarship for undergraduate studies based on academic excellence.',
    icon: Award,
    color: 'cyan'
  },
  {
    title: 'Dean\'s List & Semester Honors',
    org: 'Purdue University',
    year: '2024 – 2025',
    desc: 'Consistent academic excellence maintained at Purdue University.',
    icon: Medal,
    color: 'blue'
  }
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-primary/10 bottom-0 left-[-100px] pointer-events-none absolute" />
      
      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-primary mb-4 inline-block">Accomplishments</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 flex flex-col items-center text-center group hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:rotate-12 ${
                award.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                award.color === 'orange' ? 'bg-orange-500/10 text-orange-400' :
                'bg-cyan-500/10 text-cyan-400'
              }`}>
                <award.icon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 leading-tight">{award.title}</h3>
              <p className="text-primary text-xs font-semibold mb-3 tracking-wide uppercase">{award.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.desc}
              </p>
              <div className="mt-auto pt-4 text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">
                {award.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
