// هاوردەکردنی ستایلی گشتی
import './globals.css';

// چاککردنی ناونیشانی ناوبار:
// چونكە فۆڵدەری components لە هەمان فۆڵدەری layout دایە (واتە هەردوکیان لە ناو app دایە)
// دەبێت تەنها یەک خاڵ (.) بەکاربهێنین
import Navbar from './components/Navbar';

// زانیارییەکانی وێبسایت بۆ گۆگڵ
export const metadata = {
  title: 'پۆرتفۆلیۆی من | گەشەپێدەری وێب',
  description: 'نموونەی کارەکان و پەیوەندیکردن',
};

// ڕێکخستنی شاشە بۆ مۆبایل
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ku" dir="rtl">
      <body className="antialiased bg-slate-50 text-slate-900 overflow-x-hidden">
        
        {/* نیشاندانی ناوبار */}
        <Navbar />

        {/* نیشاندانی ناوەڕۆکی لاپەڕەکانی تر */}
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}