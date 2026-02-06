"use client";
import { motion } from 'framer-motion';

const projects = [
  { 
    title: "سەکۆی بازرگانی هۆشمەند", 
    category: "Full-Stack Development",
    desc: "دروستکردنی سیستەمێکی فرۆشتن بە بەکارهێنانی تەکنەلۆژیای سەردەم.",
    img: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  { 
    title: "ئەپی تەندروستی ژیر", 
    category: "Mobile First Design",
    desc: "ئەپڵیکەیشنێک بۆ چاودێریکردنی باری تەندروستی ڕۆژانە.",
    img: "bg-gradient-to-br from-emerald-400 to-cyan-500"
  },
  { 
    title: "سیستەمی بەڕێوەبردنی فێربوون", 
    category: "SaaS Application",
    desc: "پلاتفۆرمێک بۆ خوێندنی ئۆنلاین و تاقیکردنەوەکان.",
    img: "bg-gradient-to-br from-orange-400 to-rose-500"
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-right">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">کارە هەڵبژێردراوەکان</h2>
          <div className="h-2 w-20 bg-blue-600 rounded-full"></div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={i} 
              className="group cursor-pointer"
            >
              <div className={`h-80 ${p.img} rounded-[2rem] mb-6 overflow-hidden relative shadow-2xl shadow-slate-200`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition">{p.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-4">{p.desc}</p>
              <button className="flex items-center gap-2 font-bold text-slate-900 border-b-2 border-slate-900 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                بینینی وردەکاری
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}