'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const applySystemTheme = (matches: boolean) => {
        const next = matches ? 'dark' : 'light';
        setTheme(next);
        if (next === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };
      applySystemTheme(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => applySystemTheme(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
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
      <div className="mx-auto flex h-16 sm:h-20 max-w-4xl items-center justify-between px-4 sm:px-8">
        
        {/* School Logo + App Name Header */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
          <Image
            src="/school-logo.png"
            alt="Swami Sant Dass Public School"
            width={140}
            height={122}
            className="h-8 sm:h-12 w-auto object-contain shrink-0"
            unoptimized
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg sm:text-2xl tracking-tight lowercase leading-tight">
              papers
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium tracking-wide">
              <span className="hidden sm:inline">Swami Sant Dass Public School</span>
              <span className="sm:hidden">SSDPS</span>
            </span>
          </div>
        </Link>

        {/* Action Navigation + Corner Theme Switch */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
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
            className="rounded p-1 sm:p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            {mounted && theme === 'dark' ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
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
