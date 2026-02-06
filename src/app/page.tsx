"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Code, Layout, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Next.js 14', icon: <Code size={20} /> },
  { name: 'React', icon: <Layout size={20} /> },
  { name: 'TypeScript', icon: <Code size={20} /> },
  { name: 'Tailwind CSS', icon: <Smartphone size={20} /> },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-20" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 inline-block">
              ئامادەم بۆ پڕۆژەی نوێ 🚀
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">
              داهاتووی وێب <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-500">
                لێرەوە دەستپێدەکات
              </span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              من گەشەپێدەرێکی وێبم، کار دەکەم لەسەر گۆڕینی بیرۆکە ئاڵۆزەکان بۆ ئەزموونێکی دیجیتاڵی بێوێنە و ئاسان.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/projects" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-95">
                بینینی کارەکانم
              </Link>
              <Link href="/contact" className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                پەیوەندی بکە
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10">
           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats/Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center gap-4"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-800">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}