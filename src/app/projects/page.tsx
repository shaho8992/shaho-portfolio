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
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-slate-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* سەردێڕی لاپەڕەی پڕۆژەکان */}
        <h1 className="text-3xl md:text-5xl font-black text-center mb-16">کارە ئەنجامدراوەکان</h1>
        
        {/* پیشاندانی پڕۆژەکان - لە مۆبایل یەک بە یەک نیشان دەدرێن */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              whileHover={{ y: -10 }} // کاتێک ماوسەکە دەچێتە سەری کەمێک بەرز دەبێتەوە
              key={i} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 p-4"
            >
              {/* وێنەی کارتۆنی پڕۆژەکە - دەتوانیت لێرە وێنە دابنێیت */}
              <div className={`h-48 ${p.color} rounded-[1.5rem] mb-6 shadow-inner animate-pulse opacity-80`}></div>
              
              <div className="px-2">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <button className="text-blue-600 font-bold hover:underline text-sm italic">
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