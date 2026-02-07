"use client";
import { motion } from 'framer-motion';

// زانیاری پڕۆژەکان بە شێوەی لیست
const projects = [
  { title: "فرۆشگای ئۆنلاین", desc: "دروستکراو بە Next.js و Stripe", color: "bg-blue-500" },
  { title: "ئەپی تێبینییەکان", desc: "بەکارهێنانی Firebase بۆ داتابەیس", color: "bg-emerald-500" },
  { title: "وێبسایتی هەواڵ", desc: "دیزاینێکی خێرا بە Tailwind", color: "bg-indigo-500" },
];

export default function Projects() {
  return (
    /* گۆڕانکاری: bg-slate-50 گۆڕدرا بۆ bg-transparent بۆ ئەوەی ڕەنگی دارک مۆدی Layout دیار بێت.
       وە text-slate-900 بۆ لایت مۆد و dark:text-white بۆ دارک مۆد.
    */
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-transparent transition-colors duration-500" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* سەردێڕی لاپەڕە - dark:text-white زیادکراوە */}
        <h1 className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900 dark:text-white">
          کارە ئەنجامدراوەکان
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              whileHover={{ y: -10 }} 
              key={i} 
              /* گۆڕانکاری: 
                 - bg-white بووە بە dark:bg-slate-900/50 
                 - border-slate-100 بووە بە dark:border-slate-800
              */
              className="bg-white dark:bg-slate-900/50 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 p-4 transition-all"
            >
              {/* وێنەی کارتۆنی پڕۆژەکە - opacity کەمکراوەتەوە لە دارک مۆد بۆ ئەوەی چاو نەیەشێنێت */}
              <div className={`h-48 ${p.color} rounded-[1.5rem] mb-6 shadow-inner animate-pulse opacity-80 dark:opacity-60`}></div>
              
              <div className="px-2">
                {/* ناونیشانی پڕۆژە - ڕەنگی سپی بۆ دارک مۆد */}
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{p.title}</h3>
                
                {/* وەسفی پڕۆژە - ڕەنگی کاڵ بۆ دارک مۆد */}
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                
                <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline text-sm italic">
                  بینینی وردەکاری ←
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}