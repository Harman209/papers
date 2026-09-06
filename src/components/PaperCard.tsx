'use client';

import React from 'react';
import { Paper } from '@/types/paper';
import { usePapers } from '@/context/PaperContext';

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  const { toggleBookmark, isBookmarked, incrementDownload, setSelectedPaper } = usePapers();
  const bookmarked = isBookmarked(paper.id);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    incrementDownload(paper.id);

    const content = `=====================================================
SWAMI SANT DASS PUBLIC SCHOOL, JALANDHAR
${paper.title} ${paper.set ? `(${paper.set})` : ''}
Session: ${paper.session} | Max Marks: ${paper.maxMarks} | Time: ${paper.duration}
Subject: ${paper.subject} | Grade: Class ${paper.grade}th (${paper.stream})
Uploaded By: ${paper.uploadedBy}
=====================================================

GENERAL INSTRUCTIONS:
${paper.generalInstructions.map((ins, idx) => `${idx + 1}. ${ins}`).join('\n')}

${paper.sections.map(sec => `
-----------------------------------------------------
${sec.sectionTitle}
[Instructions: ${sec.instructions}]
-----------------------------------------------------
${sec.questions.map(q => `
${q.questionNumber}. (${q.marks} Mark${q.marks > 1 ? 's' : ''})
${q.text}
${q.subQuestions ? q.subQuestions.join('\n') : ''}
${q.orAlternative ? `\n[OR]\n${q.orAlternative}` : ''}
`).join('\n')}
`).join('\n')}

${paper.hasAnswerKey && paper.answerKeyContent ? `
=====================================================
MARKING SCHEME / SOLUTIONS:
=====================================================
${paper.answerKeyContent}
` : ''}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SSDPS_${paper.subject.replace(/[^a-zA-Z0-9]/g, '_')}_Class${paper.grade}_${paper.set ? paper.set.replace(/[^a-zA-Z0-9]/g, '_') : ''}_${paper.year}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      onClick={() => setSelectedPaper(paper)}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 border-b border-zinc-100 dark:border-zinc-900 transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 px-2 -mx-2 rounded cursor-pointer"
    >
      {/* Title & Metadata */}
      <div className="space-y-1.5 max-w-xl">
        <div className="flex items-baseline gap-2">
          <h3 className="text-base sm:text-lg font-medium text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300 transition-colors leading-snug">
            {paper.title}
          </h3>
          {paper.set && paper.set !== 'Standard / Common' && (
            <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.2 rounded shrink-0">
              {paper.set}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
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
              <span className="text-zinc-600 dark:text-zinc-300">Solution included</span>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 sm:gap-6 text-sm shrink-0 self-start sm:self-center">
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
