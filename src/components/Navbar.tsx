'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('papers_theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      if (initial === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('papers_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="w-full border-b border-zinc-100 bg-white dark:border-zinc-900 dark:bg-zinc-950 transition-colors">
      <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-6 sm:px-8">
        
        {/* Header App Name + School Subtitle */}
        <Link href="/" className="flex flex-col">
          <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight lowercase">
            papers
          </span>
          <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
            Swami Sant Dass Public School
          </span>
        </Link>

        {/* Action Navigation + Corner Theme Switch */}
        <div className="flex items-center gap-6 sm:gap-8 text-sm">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === '/'
                ? 'text-zinc-900 font-medium dark:text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Archive
          </Link>

          <Link
            href="/admin/upload"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Upload
          </Link>

          <Link
            href="/about"
            className={`transition-colors ${
              pathname === '/about'
                ? 'text-zinc-900 font-medium dark:text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            About
          </Link>

          {/* Small Sun/Moon Switch in the corner */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            className="rounded p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            {mounted && theme === 'dark' ? (
              // Sun icon (small)
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              // Moon icon (small)
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
