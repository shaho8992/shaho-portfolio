"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    setResult("لە پرۆسەدایە...");
    
    const formData = new FormData(event.target);

    // کۆدەکەت لێرە زیاد کرا بۆ ئەوەی نامەکان بۆ ئیمەیڵەکەت بێن
    formData.append("access_key", "c9ccfdc5-4b19-49c2-ae97-1dcf4da46328");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("نامەکەت بە سەرکەوتووی نێردرا! سوپاس بۆ پەیوەندیکردنت.");
      event.target.reset(); // فۆرمەکە پاک دەکاتەوە دوای ناردن
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6" dir="rtl">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">پەیوەندی بکە</h2>
        <p className="text-slate-500 mb-6 text-sm">هەر پرسیارێکت هەیە لێرە بۆم بنووسە.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">ناو</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" 
              placeholder="ناوەکەت لێرە بنووسە" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">ئیمەیڵ</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" 
              placeholder="example@gmail.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">نامە</label>
            <textarea 
              name="message" 
              required 
              className="w-full p-3 rounded-xl border border-slate-300 h-32 outline-none focus:ring-2 focus:ring-blue-500 transition" 
              placeholder="چۆن دەتوانم هاوکارت بم؟"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
          >
            ناردنی نامە
          </button>
        </form>

        {/* پیشاندانی ئەنجامی ناردنەکە */}
        {result && (
          <p className="mt-4 text-center text-sm font-medium text-blue-600 animate-pulse">
            {result}
          </p>
        )}
      </div>
    </div>
  );
}