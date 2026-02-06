"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: any) {
    event.preventDefault();
    setStatus("loading");
    setResult("لە پرۆسەدایە...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "c9ccfdc5-4b19-49c2-ae97-1dcf4da46328");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("نامەکەت گەیشت! زۆر سوپاس بۆ پەیوەندیکردنت.");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("هەڵەیەک لە تۆردا هەیە، تکایە دووبارە هەوڵ بدەرەوە.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative overflow-hidden" dir="rtl">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full grid md:grid-cols-2 bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white overflow-hidden"
      >
        {/* بەشی زانیارییەکان - چەپ */}
        <div className="bg-slate-900 p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-black mb-6">پێکەوە کار بکەین؟</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              پڕۆژەیەکت لەمێشکدایەو نازانیت چۆن دەستپێبکەیت! <br></br> هەرئێستا پەیوەندی بکە! 
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl"><Mail size={24} className="text-blue-400" /></div>
                <div>
                  <p className="text-sm text-slate-400">ئیمەیڵ</p>
                  <p className="font-bold">shaho2017ranya@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl"><MapPin size={24} className="text-blue-400" /></div>
                <div>
                  <p className="text-sm text-slate-400">شوێن</p>
                  <p className="font-bold"> کوردستان - سلێمانی - ڕانیە</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">FB</div>
            <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">LN</div>
            <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">GH</div>
          </div>
        </div>

        {/* بەشی فۆرمەکە - ڕاست */}
        <div className="p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">ناوەکەت</label>
                <input 
                  type="text" name="name" required 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                  placeholder=" " 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">ئیمەیڵەکەت</label>
                <input 
                  type="email" name="email" required 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                  placeholder="mail@example.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">بابەت</label>
              <input 
                type="text" name="subject" required 
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                placeholder="چۆن دەتوانم هاوکارت بم؟" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">نامە</label>
              <textarea 
                name="message" required 
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 h-32 outline-none focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all resize-none" 
                placeholder="وردەکاری پڕۆژەکەت بنووسە..."
              ></textarea>
            </div>

            <button 
              disabled={status === "loading"}
              type="submit" 
              className={`w-full flex items-center justify-center gap-3 font-black py-5 rounded-2xl transition-all active:scale-95 shadow-xl ${
                status === "loading" ? "bg-slate-400" : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
              } text-white`}
            >
              {status === "loading" ? "چاوەڕوانبە..." : "ناردنی نامە"}
              <Send size={20} />
            </button>
          </form>

          {/* نیشاندانی ئەنجام بە شێوەی کارت */}
          {result && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-6 p-4 rounded-2xl text-center text-sm font-bold ${
                status === "success" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              }`}
            >
              {result}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}