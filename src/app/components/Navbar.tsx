"use client";
import Link from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher'; // هێنانە ناوەوەی دوگمەی گۆڕینی ڕەنگ

export default function Navbar() {
  return (
    /* کڵاسی dark:bg-slate-900/80 ڕەنگی مینیوەکە لە کاتی دارک مۆددا دەگۆڕێت
       کڵاسی dark:border-slate-800 هێڵێکی تەنک و جوان لەژێر مینیو دروست دەکات
    */
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* لۆگۆی پۆرتفۆلیۆ */}
        <Link href="/" className="text-xl md:text-2xl font-black text-blue-600">
          PORTFOLIO
        </Link>
        
        {/* لیستەی لینکەکان - ڕەنگی text-slate-300 بۆ ئەوەی لە تاریکیدا بە ڕوونی دیار بن */}
        <div className="hidden md:flex gap-8 font-medium text-slate-600 dark:text-slate-300">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">سەرەکی</Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">پڕۆژەکان</Link>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">خزمەتگوزارییەکان</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">پەیوەندی</Link>
        </div>

        {/* بەشی چەپ: دوگمەی دارک مۆد و دوگمەی ئەکشن */}
        <div className="flex items-center gap-4">
          
          {/* دوگمەی دارک مۆد - چونکە لێرە دامانناوە، لە هەموو پەیجەکان دەردەکەوێت */}
          <ThemeSwitcher />
          
          <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition">
            دەسپێبکە
          </Link>
        </div>
      </div>
    </nav>
  );
}