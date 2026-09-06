'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-8 py-10 sm:py-16 space-y-8 text-zinc-900 dark:text-zinc-100">
      
      {/* Header */}
      <div className="space-y-1 border-b border-zinc-100 pb-4 dark:border-zinc-900">
        <h1 className="text-2xl font-bold tracking-tight">
          About
        </h1>
        <p className="text-xs text-zinc-400">
          <a
            href="https://swamisantdass.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 underline"
          >
            Swami Sant Dass Public School
          </a>
          {' '}• Question Paper Archive
        </p>
      </div>

      {/* Overview */}
      <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          This digital archive preserves past question papers for Classes 9th through 12th at{' '}
          <a
            href="https://swamisantdass.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 dark:text-zinc-100 underline"
          >
            Swami Sant Dass Public School, Jalandhar
          </a>.
        </p>
        <p>
          Historically, past papers were only available in physical binders in the school library. This portal provides students with fast, 24/7 online access to master question papers, marking schemes, and revision material from any device at zero cost to the school.
        </p>
      </div>

      {/* Builder Bio */}
      <div className="space-y-2 border-t border-zinc-100 pt-6 dark:border-zinc-900">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 lowercase">
          built by students, for students
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          this archive was initiated and built by <span className="font-semibold text-zinc-900 dark:text-zinc-100">Harman Kajla</span>, a student at swami sant dass public school interested in computer science and building practical systems. built by students, for students.
        </p>
        <div className="pt-1 flex items-center gap-4 text-xs text-zinc-400">
          <a
            href="https://github.com/Harman209"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 underline"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/harmankajla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 underline"
          >
            linkedin
          </a>
        </div>
      </div>

      {/* Open Source & Contributions */}
      <div className="space-y-2 border-t border-zinc-100 pt-6 dark:border-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
        <p>
          The codebase is open source under the <a href="https://github.com/Harman209/papers/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">MIT License</a>.
        </p>
        <p>
          Students and teachers who want to contribute features, report issues, or help digitize missing question papers can do so on{' '}
          <a
            href="https://github.com/Harman209/papers"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 dark:text-zinc-100 underline"
          >
            GitHub
          </a>.
        </p>
      </div>

      {/* Back Link */}
      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 text-xs">
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back to Question Papers
        </Link>
      </div>

    </div>
  );
}
