import { motion } from 'framer-motion';
import { ExternalLink, Tv, Play, Award } from 'lucide-react';

interface PressItem {
  id: string;
  title: string;
  titleAr?: string;
  source: string;
  date: string;
  link: string;
  youtubeId?: string;
  desc: string;
  tag: string;
}

const pressItems: PressItem[] = [
  {
    id: 'dmc-interview',
    title: 'National TV Interview: 1st Place Award Winner at AAAI 2026 Singapore',
    titleAr: 'طالب بكلية الهندسة يتفوق على متسابقين من كل العالم.. محمد علاء يفوز بالمركز الأول في مسابقة بسنغافورة',
    source: 'DMC TV (National Television)',
    date: 'Feb 2026',
    link: 'https://www.youtube.com/watch?v=PvY_U4R7-To',
    youtubeId: 'PvY_U4R7-To',
    tag: 'Television Broadcast',
    desc: "Broadcast interview on Egypt's premier national network (DMC) discussing the 1st-place 3-Minute Thesis (3MT) contest win and Best Student Poster award at the AAAI 2026 conference in Singapore. Shared insights on architecting adaptive conversational AI for intercultural communication (ICC Tutor), publishing in tier-1 computer science venues, and representing Egypt on the international AI stage.",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-20 relative overflow-hidden">
      {/* Background ambient orb */}
      <div className="orb w-80 h-80 bg-primary/10 -bottom-20 -left-20 pointer-events-none absolute" />

      <div className="container max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            <Tv size={14} />
            Media & Broadcasts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">In The Press</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            Television appearances, media coverage, and feature stories highlighting research breakthroughs and international accolades.
          </p>
        </motion.div>

        <div className="space-y-8">
          {pressItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="glass-card p-6 md:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Video Player */}
                {item.youtubeId && (
                  <div className="lg:col-span-7">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(14,165,233,0.15)] bg-black/40">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className={item.youtubeId ? 'lg:col-span-5 flex flex-col justify-between' : 'lg:col-span-12'}>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold bg-primary/15 border border-primary/30 px-2.5 py-1 rounded-full">
                        {item.source}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {item.titleAr && (
                      <p className="text-xs text-secondary/90 font-medium mb-3 italic leading-relaxed" dir="rtl">
                        "{item.titleAr}"
                      </p>
                    )}

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                      <Award size={13} />
                      AAAI 2026 Coverage
                    </span>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs inline-flex items-center gap-2 py-2 px-4 shadow-[0_0_15px_rgba(14,165,233,0.25)]"
                    >
                      <Play size={13} />
                      Watch on YouTube
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
