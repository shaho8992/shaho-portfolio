"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          PORTFOLIO<span className="text-slate-900">.</span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition">سەرەکی</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">پڕۆژەکان</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">پەیوەندی</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition">
          دەسپێبکە
        </Link>
      </div>
    </nav>
  );
}