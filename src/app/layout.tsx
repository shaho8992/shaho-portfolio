// ١. هاوردەکردنی ستایلی گشتی تەیلویند
import './globals.css';

// ٢. هاوردەکردنی پێکهاتە سەرەکییەکان
import Navbar from './components/Navbar'; // مینیوی سەرەکی
import { Providers } from './providers';   // دابینکەری دارک مۆد

// ٣. زانیارییەکانی وێبسایت بۆ گۆگڵ (SEO)
export const metadata = {
  title: 'پۆرتفۆلیۆی من | گەشەپێدەری وێب',
  description: 'نموونەی کارەکان و پەیوەندیکردن',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning ڕێگری دەکات لە هەڵەی سپی بوونی شاشە لە کاتی ڕیفریش
    <html lang="ku" dir="rtl" suppressHydrationWarning>
      {/* - bg-white: ڕەنگی سپی بۆ لایت مۆد
          - dark:bg-slate-950: ڕەنگی تاریکی قووڵ بۆ دارک مۆد
          - transition-colors: بۆ ئەوەی گۆڕانی ڕەنگەکە زۆر نەرم بێت
      */}
      <body className="antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
        
        {/* Providers دەبێت دەوری هەموو شتێک بدات تا دارک مۆد لە هەموو شوێن ئیش بکات */}
        <Providers>
          
          {/* ناوبار لێرە دادەنێین بۆ ئەوەی لە هەموو پەیجەکان (Home, Services, Contact) وەک یەک دەرکەوێت */}
          <Navbar />

          {/* ئەم بەشە ناوەڕۆکی هەموو پەیجەکان نیشان دەدات */}
          <main className="min-h-screen">
            {children}
          </main>
          
        </Providers>
      </body>
    </html>
  );
}