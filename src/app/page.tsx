"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Layout, Smartphone, CheckCircle, Award, Users } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'Next.js 15', icon: <Code size={20} /> },
  { name: 'React', icon: <Layout size={20} /> },
  { name: 'TypeScript', icon: <Code size={20} /> },
  { name: 'Tailwind CSS', icon: <Smartphone size={20} /> },
];

const stats = [
  { label: 'پرۆژە تەواوکراوەکان', value: '+١٥', icon: <CheckCircle size={20} /> },
  { label: 'ساڵانی ئەزموون', value: '+٣', icon: <Award size={20} /> },
  { label: 'کڕیاری ڕازی', value: '+٢٠', icon: <Users size={20} /> },
];

export default function Home() {
  return (
    // لێرەدا پاشبنەمای گشتی بۆ دارک مۆد گۆڕدراوە
    <main className="min-h-screen pt-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-500">
      
      {/* ----------------- Hero Section ----------------- */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* بەشی تێکستەکان */}
          <motion.div 
            className="flex-1 text-right md:text-right text-center"
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold mb-6 inline-block">
              ئامادەم بۆ پرۆژەی نوێ 🚀
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              داهاتووی وێب <br />
              <span className="text-blue-600 dark:text-blue-500">بە تەکنەلۆژیای سەردەم</span>
            </h1>

            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
              من گەشەپێدەرێکی پسپۆڕم لە دروستکردنی ئەپڵیکەیشنی خێرا و مۆدێرن. کارەکانم تێکەڵەیەکە لە جوانی دیزاین و هێزی کۆد.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/projects" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none transition-all transform hover:-translate-y-1">
                بینینی کارەکانم
              </Link>
              <Link href="/contact" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                پەیوەندی بکە
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
              <Image 
                src="/shaho2.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                priority
              />
            </div>

            <motion.div 
              animate={{ 
                y: [0, -12, 0],
                x: [0, 8, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-1 -right-4 w-64 h-64 md:w-80 md:h-80 bg-blue-200/50 dark:bg-blue-900/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -z-0 blur-[2px] group-hover:bg-blue-300/70 transition-colors duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* ----------------- Stats Section (ئامارەکان) ----------------- */}
      <section className="py-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-4">
                <div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl">{stat.icon}</div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Skills Section ----------------- */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-16 dark:text-white">تەکنەلۆژیاکانم</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-slate-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}