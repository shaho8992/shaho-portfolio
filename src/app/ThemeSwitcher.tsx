'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
    >
      {/* نیشاندانی مانگ بۆ لایت مۆد و خۆر بۆ دارک مۆد */}
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}