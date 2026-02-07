"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: any) {
    event.preventDefault();
    setStatus("loading");
    setResult("لە پرۆسەدایە...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "c9ccfdc5-4b19-49c2-ae97-1dcf4da46328");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("نامەکەت گەیشت! سوپاس.");
      event.target.reset();
    } else {
      setResult("هەڵەیەک ڕوویدا، تکایە هەوڵ بدەرەوە.");
      setStatus("idle");
    }
  }

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-12 px-4 transition-colors duration-500" dir="rtl">
      {/* لێرەدا دیزاینی پێچەوانەمان داناوە */}
      <div className="max-w-5xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-slate-100 dark:border-slate-800 transition-all duration-500">
        
        {/* لای ڕاست: 
            لە لایت مۆد: ڕەشە (bg-slate-900)
            لە دارک مۆد: دەبێتە سپی یان کاڵ (dark:bg-slate-100)
        */}
        <div className="bg-slate-900 dark:bg-slate-50 p-8 md:p-12 text-white dark:text-slate-900 flex flex-col justify-center transition-colors duration-500">
          <h2 className="text-3xl font-black mb-6 italic">پەیوەندیم پێوە بکە</h2>
          <p className="text-slate-400 dark:text-slate-600 mb-10 leading-relaxed text-sm">
            ئەگەر پرسیارێکت هەیە یان دەتەوێت کارێکم پێ بسپێریت، لێرەوە نامە بنێرە.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 dark:bg-blue-600/10 rounded-xl text-blue-400 dark:text-blue-600"><Mail size={20} /></div>
              <p className="text-sm">shaho2017ranya@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 dark:bg-blue-600/10 rounded-xl text-blue-400 dark:text-blue-600"><MapPin size={20} /></div>
              <p className="text-sm">Kurdistan - Sulaymani - Ranya</p>
            </div>
          </div>
        </div>

        {/* لای چەپ: 
            لە لایت مۆد: سپییە (bg-white)
            لە دارک مۆد: دەبێتە ڕەش (dark:bg-slate-900)
        */}
        <div className="p-8 md:p-12 bg-white dark:bg-slate-900 transition-colors duration-500">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">ناوەکەت</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900 dark:text-white" 
                placeholder="ناوەکەت لێرە بنوسە" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">ئیمەیڵ</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-900 dark:text-white" 
                placeholder="mail@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">نامە</label>
              <textarea 
                name="message" 
                required 
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-32 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-slate-900 dark:text-white" 
                placeholder="چۆن دەتوانم هاوکارت بم؟"
              ></textarea>
            </div>

            <button 
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              {status === "loading" ? "لە پرۆسەدایە..." : "ناردنی نامە"}
              <Send size={18} />
            </button>
          </form>
          
          {result && <p className="mt-4 text-center text-sm font-bold text-blue-600 dark:text-blue-400 animate-pulse">{result}</p>}
        </div>
      </div>
    </div>
  );
}