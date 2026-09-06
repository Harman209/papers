'use client';

import React, { useState, useEffect } from 'react';
import { usePapers } from '@/context/PaperContext';

export default function PaperViewerModal() {
  const { selectedPaper, setSelectedPaper, toggleBookmark, isBookmarked, incrementDownload } = usePapers();
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPaper(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedPaper]);

  if (!selectedPaper) return null;

  const bookmarked = isBookmarked(selectedPaper.id);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    incrementDownload(selectedPaper.id);
    const content = `=====================================================
SWAMI SANT DASS PUBLIC SCHOOL, JALANDHAR
${selectedPaper.title}
Academic Session: ${selectedPaper.session} | Max Marks: ${selectedPaper.maxMarks} | Time Allowed: ${selectedPaper.duration}
Subject: ${selectedPaper.subject} | Grade: Class ${selectedPaper.grade}th (${selectedPaper.stream})
Uploaded By: ${selectedPaper.uploadedBy}
=====================================================

GENERAL INSTRUCTIONS:
${selectedPaper.generalInstructions.map((ins, idx) => `${idx + 1}. ${ins}`).join('\n')}

${selectedPaper.sections.map(sec => `
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

${selectedPaper.hasAnswerKey && selectedPaper.answerKeyContent ? `
=====================================================
MARKING SCHEME / VERIFIED SOLUTIONS:
=====================================================
${selectedPaper.answerKeyContent}
` : ''}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SSDPS_${selectedPaper.subject.replace(/[^a-zA-Z0-9]/g, '_')}_Class${selectedPaper.grade}_${selectedPaper.year}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-base';
    if (fontSize === 'xl') return 'text-lg';
    return 'text-sm';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-xs">
      <div 
        className="relative flex h-[92vh] w-full max-w-4xl flex-col rounded-lg bg-white shadow-xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Minimal Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 sm:px-4 py-2 sm:py-2.5 dark:border-zinc-800 dark:bg-zinc-950 gap-2 text-xs">
          <div className="truncate min-w-0">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Class {selectedPaper.grade} • {selectedPaper.subject}
            </span>
            <span className="text-zinc-500 ml-1.5 hidden sm:inline">({selectedPaper.session})</span>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Font size toggles (desktop) */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xl' : 'normal')}
              className="rounded border border-zinc-200 bg-white px-2 py-1 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 hidden md:inline-block"
              title="Toggle font size"
            >
              Text Size ({fontSize})
            </button>

            {/* Answer Key Toggle */}
            {selectedPaper.hasAnswerKey && (
              <button
                onClick={() => setShowAnswerKey(!showAnswerKey)}
                className={`rounded border px-2 sm:px-2.5 py-1 font-medium transition-colors text-[11px] sm:text-xs ${
                  showAnswerKey
                    ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200'
                }`}
              >
                {showAnswerKey ? 'Questions' : 'Solutions'}
              </button>
            )}

            {/* Print (desktop) */}
            <button
              onClick={handlePrint}
              className="rounded border border-zinc-200 bg-white px-2 py-1 font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 hidden sm:inline-block"
            >
              Print
            </button>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="rounded bg-zinc-900 px-2.5 sm:px-3 py-1 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-[11px] sm:text-xs"
            >
              Download
            </button>

            {/* Close */}
            <button
              onClick={() => setSelectedPaper(null)}
              className="rounded p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 ml-0.5 text-base font-bold leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Paper Document Layout */}
        <div className={`flex-1 overflow-y-auto p-2 sm:p-8 bg-zinc-100 dark:bg-zinc-950 ${getFontSizeClass()}`}>
          <div className="mx-auto max-w-3xl rounded bg-white p-4 sm:p-10 shadow-sm border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 print:shadow-none print:border-none">
            
            {/* Examination Header */}
            <div className="text-center border-b-2 border-zinc-900 dark:border-zinc-100 pb-4 mb-6">
              <div className="text-sm sm:text-base font-bold tracking-wide uppercase text-zinc-800 dark:text-zinc-200">
                SWAMI SANT DASS PUBLIC SCHOOL, JALANDHAR
              </div>
              <h1 className="mt-1 text-lg sm:text-xl font-bold uppercase text-zinc-900 dark:text-white">
                {selectedPaper.examType} ({selectedPaper.session})
              </h1>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                CLASS {selectedPaper.grade}TH {selectedPaper.stream !== 'General' ? `(${selectedPaper.stream.toUpperCase()})` : ''} — {selectedPaper.subject.toUpperCase()}
              </div>

              {/* Time and Marks */}
              <div className="mt-3 flex items-center justify-between text-xs font-semibold border-t border-zinc-200 dark:border-zinc-800 pt-2 text-zinc-700 dark:text-zinc-300">
                <span>Time Allowed: {selectedPaper.duration}</span>
                <span>Maximum Marks: {selectedPaper.maxMarks}</span>
              </div>
            </div>

            {/* Answer Key Mode */}
            {showAnswerKey ? (
              <div className="space-y-4">
                <div className="border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 p-3 rounded text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Marking scheme and solutions for evaluation guidance:
                </div>

                <div className="whitespace-pre-wrap font-mono text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-950 p-4 rounded border border-zinc-200 dark:border-zinc-800 leading-relaxed">
                  {selectedPaper.answerKeyContent || 'Solutions are being updated.'}
                </div>
              </div>
            ) : (
              /* Questions View */
              <div className="space-y-6">
                {/* General Instructions */}
                <div className="rounded bg-zinc-50 dark:bg-zinc-950/60 p-4 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5">
                    General Instructions:
                  </div>
                  <ol className="list-decimal pl-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {selectedPaper.generalInstructions.map((ins, i) => (
                      <li key={i}>{ins}</li>
                    ))}
                  </ol>
                </div>

                {/* Sections */}
                {selectedPaper.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3 pt-2">
                    <div className="border-b border-zinc-300 dark:border-zinc-700 pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h2 className="font-bold uppercase text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                        {section.sectionTitle}
                      </h2>
                      <span className="text-xs italic text-zinc-500">
                        {section.instructions}
                      </span>
                    </div>

                    <div className="space-y-4 pt-1">
                      {section.questions.map((q, qIdx) => (
                        <div key={qIdx} className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2 flex-1">
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100 shrink-0">
                              {q.questionNumber}.
                            </span>
                            <div className="space-y-2 text-zinc-800 dark:text-zinc-200">
                              <p className="leading-relaxed whitespace-pre-wrap">{q.text}</p>
                              
                              {q.subQuestions && q.subQuestions.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                                  {q.subQuestions.map((sub, subIdx) => (
                                    <div key={subIdx} className="text-xs text-zinc-700 dark:text-zinc-300">
                                      {sub}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {q.orAlternative && (
                                <div className="pt-2">
                                  <div className="text-xs font-semibold text-zinc-400 uppercase my-1 text-center">
                                    — OR —
                                  </div>
                                  <p className="italic text-zinc-700 dark:text-zinc-300">
                                    {q.orAlternative}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>

                          <span className="shrink-0 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                            [{q.marks}]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Footer */}
                <div className="pt-6 text-center border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-400">
                  <p>*** END OF QUESTION PAPER • SWAMI SANT DASS PUBLIC SCHOOL ***</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
