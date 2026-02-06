"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* لۆگۆی سایتەکە - لای ڕاست */}
        <Link href="/" className="text-xl md:text-2xl font-black text-blue-600">
          PORTFOLIO<span className="text-slate-900"></span>
        </Link>
        
        {/* لینکەکان - تەنها لە شاشەی گەورە دیارن (hidden md:flex) */}
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition">سەرەکی</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">پڕۆژەکان</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">پەیوەندی</Link>
        </div>

        {/* دوگمەی دەستپێکردن - لای چەپ */}
        <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition">
          دەسپێبکە
        </Link>
      </div>
    </nav>
  );
}