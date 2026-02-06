"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Layout, Smartphone } from 'lucide-react'; // ئایکۆنەکان

// لیستێک بۆ زانیاری تەکنەلۆژیاکان (Skills)
const skills = [
  { name: 'Next.js 14', icon: <Code size={20} /> },
  { name: 'React', icon: <Layout size={20} /> },
  { name: 'TypeScript', icon: <Code size={20} /> },
  { name: 'Tailwind CSS', icon: <Smartphone size={20} /> },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* ----------------- بەشی ناساندن (Hero Section) ----------------- */}
      <section className="py-16 md:py-24 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          {/* نیشانەی بچووکی سەر تایتڵەکە */}
          <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 inline-block">
            خۆشحاڵم بە بینینت 🚀
          </span>

          {/* تایتڵی گەورە - ڕەنگی شین و ڕەش تێکەڵ کراوە */}
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            داهاتووی وێب <br />
            <span className="text-blue-600">لێرەوە دەستپێدەکات</span>
          </h1>

          {/* تێکستی ناساندنی ژێر تایتڵەکە */}
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            من گەشەپێدەرێکی وێبم، کار دەکەم لەسەر دروستکردنی باشترین ئەزموون بۆ بەکارهێنەران.
          </p>

          {/* دوگمەکانی ناوەڕاست - لە مۆبایل دەبنە سەر یەک (flex-col) */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
            <Link href="/projects" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-lg transition">
              بینینی کارەکانم
            </Link>
            <Link href="/contact" className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition">
              پەیوەندی بکە
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ----------------- بەشی کارامەییەکان (Skills Section) ----------------- */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">تەکنەلۆژیاکان</h2>
          {/* لێرەدا Grid بەکارهاتووە بۆ ئەوەی لە مۆبایل یەک دانە و لە کۆمپیوتەر ٤ دانە بێت */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center gap-4 transition hover:shadow-md">
                <div className="p-3 bg-white text-blue-600 rounded-2xl shadow-sm">{skill.icon}</div>
                <h3 className="font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}