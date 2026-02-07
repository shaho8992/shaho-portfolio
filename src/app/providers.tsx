'use client' // پێویستە چونکە ئەم بەشە لەسەر براوزەری بەکارهێنەر کار دەکات
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // attribute="class" واتە کلاسێکی .dark زیاد دەکات بۆ وێبسایتەکە کاتێک دۆخەکە دەگۆڕێت
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}