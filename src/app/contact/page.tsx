"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  // State بۆ چاودێریکردنی ئەنجامی ناردنەکە
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // فانکشن بۆ ناردنی زانیارییەکانی فۆرمەکە بۆ Web3Forms
  async function handleSubmit(event: any) {
    event.preventDefault();
    setStatus("loading"); // گۆڕینی دۆخی دوگمەکە بۆ Loading
    setResult("لە پرۆسەدایە...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "c9ccfdc5-4b19-49c2-ae97-1dcf4da46328"); // کلیلی فۆرمەکە

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("نامەکەت گەیشت! سوپاس.");
      event.target.reset(); // پاککردنەوەی فۆرمەکە دوای سەرکەوتن
    } else {
      setResult("هەڵەیەک ڕوویدا، تکایە هەوڵ بدەرەوە.");
      setStatus("idle");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-4" dir="rtl">
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* لای ڕاست: زانیاری گشتی پەیوەندیکردن (ڕەنگی تاریک) */}
        <div className="bg-slate-900 p-8 md:p-12 text-white">
          <h2 className="text-3xl font-black mb-6 italic">پەیوەندیم پێوە بکە</h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-sm">
            ئەگەر پرسیارێکت هەیە یان دەتەوێت کارێکم پێ بسپێریت، لێرەوە نامە بنێرە.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl text-blue-400"><Mail size={20} /></div>
              <p className="text-sm">hello@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl text-blue-400"><MapPin size={20} /></div>
              <p className="text-sm">کوردستان، سلێمانی</p>
            </div>
          </div>
        </div>

        {/* لای چەپ: فۆرمی ناردنی نامە */}
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">ناوەکەت</label>
              <input type="text" name="name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="ئاراس..." />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">ئیمەیڵ</label>
              <input type="email" name="email" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="mail@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">نامە</label>
              <textarea name="message" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 h-32 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none" placeholder="چۆن دەتوانم هاوکارت بم؟"></textarea>
            </div>

            {/* دوگمەی ناردن - کاتێک دۆخەکە Loading بێت نووسینەکە دەگۆڕێت */}
            <button 
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              {status === "loading" ? "لە پرۆسەدایە..." : "ناردنی نامە"}
              <Send size={18} />
            </button>
          </form>
          
          {/* ئەنجامی کۆتایی ناردن لێرە بە ڕەنگی شین نیشان دەدرێت */}
          {result && <p className="mt-4 text-center text-sm font-bold text-blue-600 animate-pulse">{result}</p>}
        </div>
      </div>
    </div>
  );
}