'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12 space-y-8 text-zinc-900 dark:text-zinc-100">
      
      {/* Header */}
      <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <h1 className="text-2xl font-bold tracking-tight">
          About the Digital Question Paper Archive
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Swami Sant Dass Public School, Jalandhar
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Overview
          </h2>
          <p>
            Historically, past question papers for midterm, pre-board, and annual examinations were preserved solely in physical binders within the school library. During peak examination periods, accessing these physical copies led to long waiting times, wear and tear of master prints, and limited access for students outside school hours.
          </p>
          <p>
            This digital archive is built to solve that problem — providing students in Classes 9th, 10th, 11th, and 12th with instant, 24/7 online access to official past question papers, marking schemes, and revision material from any device.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Key Objectives
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Equal Academic Access:</strong> Every student has equal access to past papers regardless of library hours or physical copy availability.
            </li>
            <li>
              <strong>Preservation of Master Copies:</strong> Eliminates damage, loss, or deterioration of printed master copies.
            </li>
            <li>
              <strong>Paperless & Eco-Friendly:</strong> Reduces unnecessary physical photocopying costs for the school.
            </li>
            <li>
              <strong>Board Exam Readiness:</strong> Provides targeted practice materials for Classes 10th and 12th preparing for board examinations.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Administration & Security
          </h2>
          <p>
            The portal is divided into two areas:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Student Portal:</strong> Open read-and-download access with multi-criteria filtering by class, subject, exam category, and year.
            </li>
            <li>
              <strong>Staff / Teacher Portal:</strong> A protected management interface where authorized teachers and librarians can upload and catalog newly administered papers.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Zero-Cost Infrastructure
          </h2>
          <p>
            The platform is engineered to operate on modern serverless cloud infrastructure at zero financial cost to the school, utilizing free tiers of web hosting and static storage.
          </p>
        </section>

        {/* Student Builder Bio */}
        <section className="space-y-2 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 lowercase">
            built by students, for students
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            this archive was initiated and built by <span className="font-semibold text-zinc-900 dark:text-zinc-100">Harman Kajla</span>, a student at swami sant dass public school interested in computer science and building practical systems. built by students, for students.
          </p>
          <div className="pt-1 flex items-center gap-4 text-xs">
            <a
              href="https://github.com/Harman209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/harmankajla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline"
            >
              linkedin
            </a>
          </div>
        </section>

        <section className="space-y-2 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Open Source License
          </h2>
          <p className="text-xs text-zinc-500">
            The source code for this digital archive software is open source under the MIT License.
          </p>
          <div className="pt-2">
            <a
              href="https://github.com/Harman209/papers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600"
            >
              View repository on GitHub →
            </a>
          </div>
        </section>

      </div>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
        <Link
          href="/"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium"
        >
          ← Back to Question Papers
        </Link>
        <Link
          href="/admin/upload"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium"
        >
          Staff Upload Portal →
        </Link>
      </div>

    </div>
  );
}
