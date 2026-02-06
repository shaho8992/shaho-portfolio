export default function Projects() {
  const projects = [
    { title: "فرۆشگای ئۆنلاین", desc: "دروستکراو بە Next.js و Stripe", link: "#" },
    { title: "ئەپی تێبینییەکان", desc: "بەکارهێنانی Firebase بۆ داتابەیس", link: "#" },
    { title: "وێبسایتی هەواڵ", desc: "دیزاینێکی خێرا بە Tailwind", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-10" dir="rtl">
      <h1 className="text-4xl font-bold text-center mb-12">کارەکانم</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-2 transition-transform">
            <div className="h-40 bg-slate-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-slate-600 mb-4">{p.desc}</p>
            <button className="text-blue-600 font-bold hover:underline">بینینی زیاتر ←</button>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
         <a href="/" className="text-slate-500 hover:text-blue-600 transition">گەڕانەوە بۆ سەرەکی</a>
      </div>
    </div>
  );
}