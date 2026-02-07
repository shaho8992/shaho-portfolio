import React from 'react';

export default function ServicesPage() {
  const services = [
    { title: "Web Design", desc: "دیزاینکردنی وێبسایتی مۆدێرن و سەرنجڕاکێش" },
    { title: "Business Management", desc: "بەڕێوەبردنی کارەکان بە شێوازێکی پرۆفیشناڵ" },
    { title: "IT Support", desc: "چارەسەرکردنی کێشە تەکنیکییەکان و پشتگیری بەردەوام" }
  ];

  return (
    // bg-transparent لێرەدا وادەکات ڕەنگی تاریکی Layout دەرکەوێت
    <main className="min-h-screen bg-transparent pt-32 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        
        {/* border-blue-100/20 بۆ ئەوەی هێڵەکە لە ناو دارک مۆد زۆر تیژ نەبێت */}
        <h1 className="text-4xl font-bold text-blue-600 mb-8 border-b-2 border-blue-100 dark:border-blue-900/30 pb-4 text-right">
          Services / خزمەتگوزارییەکان
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div 
              key={index} 
              // dark:bg-slate-900/50: ڕەنگی ناو کارتەکە لە کاتی دارک مۆد
              // dark:border-slate-800: ڕەنگی لێواری کارتەکە
              className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 group"
            >
              {/* dark:text-slate-100: ڕەنگی ناونیشانی خزمەتگوزاری لە تاریکیدا */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              
              {/* dark:text-slate-400: ڕەنگی وەسفی خزمەتگوزاری لە تاریکیدا */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-right">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}