'use client';

import React from 'react';
import { Paper } from '@/types/paper';
import { usePapers } from '@/context/PaperContext';
import { downloadPaperPdf } from '@/utils/pdfGenerator';

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  const { toggleBookmark, isBookmarked, incrementDownload, setSelectedPaper } = usePapers();
  const bookmarked = isBookmarked(paper.id);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    incrementDownload(paper.id);
    downloadPaperPdf(paper);
  };

  return (
    <div 
      onClick={() => setSelectedPaper(paper)}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 border-b border-zinc-100 dark:border-zinc-900 transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 px-2 rounded cursor-pointer"
    >
      {/* Title & Metadata */}
      <div className="space-y-1.5 max-w-xl">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-sm sm:text-base font-medium text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300 transition-colors leading-snug">
            {paper.title}
          </h3>
          {paper.set && paper.set !== 'Standard / Common' && (
            <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.5 rounded shrink-0">
              {paper.set}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-zinc-400">
          <span>Class {paper.grade}</span>
          <span>•</span>
          <span>{paper.subject}</span>
          <span>•</span>
          <span>{paper.examType}</span>
          <span>•</span>
          <span>{paper.session}</span>
          <span>•</span>
          <span>{paper.maxMarks} Marks</span>
          {paper.hasAnswerKey && (
            <>
              <span>•</span>
              <span className="text-zinc-600 dark:text-zinc-300 font-medium">Solution included</span>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm shrink-0 self-start sm:self-center pt-1 sm:pt-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark(paper.id);
          }}
          className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          {bookmarked ? 'Saved' : 'Save'}
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPaper(paper);
          }}
          className="text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          Read
        </button>

        <button
          type="button"
          onClick={handleDownload}
          className="text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          Download
        </button>
      </div>
    </div>
  );
}
