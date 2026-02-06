import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-20 pb-10 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 mb-6">
          سڵاو، من گەشەپێدەری وێبم
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          من پسپۆڕم لە دروستکردنی ئەپڵیکەیشنی وێبی خێرا و مۆدێرن بە بەکارهێنانی Next.js و Tailwind CSS.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
            بینینی پڕۆژەکان
          </Link>
          <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">
            پەیوەندی بکە
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">تەکنەلۆژیاکانی بەکاریان دێنم</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((skill) => (
              <div key={skill} className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-bold hover:shadow-md transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}