'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { usePapers } from '@/context/PaperContext';
import { downloadPaperPdf, getPaperPdfBlobUrl } from '@/utils/pdfGenerator';

export default function PaperViewerModal() {
  const { selectedPaper, setSelectedPaper, incrementDownload } = usePapers();
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'pdf' | 'text'>('pdf');

  // Handle ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPaper(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedPaper]);

  // Generate PDF blob URL on paper or answer key toggle
  useEffect(() => {
    if (!selectedPaper) {
      setPdfBlobUrl(null);
      return;
    }

    try {
      const url = getPaperPdfBlobUrl(selectedPaper, { includeAnswers: showAnswerKey });
      setPdfBlobUrl(url);

      return () => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      };
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    }
  }, [selectedPaper, showAnswerKey]);

  if (!selectedPaper) return null;

  const handleDownload = () => {
    incrementDownload(selectedPaper.id);
    downloadPaperPdf(selectedPaper, { includeAnswers: showAnswerKey });
  };

  const handleOpenInNewTab = () => {
    if (pdfBlobUrl) {
      window.open(pdfBlobUrl, '_blank');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-xs"
      onClick={() => setSelectedPaper(null)}
    >
      <div 
        className="relative flex h-[94vh] w-full max-w-5xl flex-col rounded-lg bg-white shadow-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 sm:px-5 py-2.5 dark:border-zinc-800 dark:bg-zinc-950 gap-2 text-xs">
          <div className="truncate min-w-0 flex items-center gap-2">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Class {selectedPaper.grade} • {selectedPaper.subject}
            </span>
            {selectedPaper.set && selectedPaper.set !== 'Standard / Common' && (
              <span className="text-[10px] font-semibold border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.5 rounded text-zinc-600 dark:text-zinc-400 shrink-0">
                {selectedPaper.set}
              </span>
            )}
            <span className="text-zinc-400 hidden sm:inline">({selectedPaper.session})</span>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center rounded border border-zinc-200 bg-white p-0.5 text-[11px] dark:border-zinc-700 dark:bg-zinc-800">
              <button
                onClick={() => setViewMode('pdf')}
                className={`rounded px-2 py-0.5 font-medium transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('text')}
                className={`rounded px-2 py-0.5 font-medium transition-colors ${
                  viewMode === 'text'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900'
                }`}
              >
                Text View
              </button>
            </div>

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
                {showAnswerKey ? 'Hide Solutions' : 'Include Solutions'}
              </button>
            )}

            {/* Open in new tab */}
            {pdfBlobUrl && (
              <button
                onClick={handleOpenInNewTab}
                className="rounded border border-zinc-200 bg-white px-2.5 py-1 font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs hidden sm:inline-block"
                title="Open raw PDF in new browser tab"
              >
                Open Tab ↗
              </button>
            )}

            {/* Download PDF Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 rounded bg-zinc-900 px-3 py-1 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-[11px] sm:text-xs"
            >
              <span>Download PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={() => setSelectedPaper(null)}
              className="rounded p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-base font-bold leading-none ml-1"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          {viewMode === 'pdf' ? (
            pdfBlobUrl ? (
              <iframe
                src={`${pdfBlobUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full border-0 bg-zinc-100 dark:bg-zinc-950"
                title={`${selectedPaper.title} PDF Document`}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                Generating PDF document...
              </div>
            )
          ) : (
            /* Text fallback view */
            <div className="h-full overflow-y-auto p-4 sm:p-8">
              <div className="mx-auto max-w-3xl rounded bg-white p-6 sm:p-10 shadow-sm border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100">
                {/* Header */}
                <div className="text-center border-b-2 border-zinc-900 dark:border-zinc-100 pb-4 mb-6">
                  <div className="text-sm font-bold tracking-wide uppercase text-zinc-800 dark:text-zinc-200">
                    SWAMI SANT DASS PUBLIC SCHOOL, JALANDHAR
                  </div>
                  <h1 className="mt-1 text-lg font-bold uppercase text-zinc-900 dark:text-white">
                    {selectedPaper.examType} ({selectedPaper.session})
                  </h1>
                  <div className="mt-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    CLASS {selectedPaper.grade}TH {selectedPaper.stream !== 'General' ? `(${selectedPaper.stream.toUpperCase()})` : ''} — {selectedPaper.subject.toUpperCase()} {selectedPaper.set && selectedPaper.set !== 'Standard / Common' ? `(${selectedPaper.set})` : ''}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold border-t border-zinc-200 dark:border-zinc-800 pt-2 text-zinc-700 dark:text-zinc-300">
                    <span>Time Allowed: {selectedPaper.duration}</span>
                    <span>Maximum Marks: {selectedPaper.maxMarks}</span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="rounded bg-zinc-50 dark:bg-zinc-950/60 p-4 border border-zinc-200 dark:border-zinc-800 mb-6">
                  <div className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300 mb-1.5">
                    General Instructions:
                  </div>
                  <ol className="list-decimal pl-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {selectedPaper.generalInstructions.map((ins, i) => (
                      <li key={i}>{ins}</li>
                    ))}
                  </ol>
                </div>

                {/* Questions */}
                <div className="space-y-6">
                  {selectedPaper.sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-3 pt-2">
                      <div className="border-b border-zinc-300 dark:border-zinc-700 pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h2 className="font-bold uppercase text-zinc-900 dark:text-zinc-100 text-sm">
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
                              <div className="space-y-2 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm">
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
                </div>

                {/* Solutions Section if active */}
                {showAnswerKey && selectedPaper.hasAnswerKey && (
                  <div className="mt-8 border-t-2 border-zinc-900 dark:border-zinc-100 pt-6 space-y-3">
                    <h3 className="font-bold text-sm uppercase text-zinc-900 dark:text-zinc-100">
                      Marking Scheme & Verified Solutions
                    </h3>
                    <div className="whitespace-pre-wrap font-mono text-xs bg-zinc-50 dark:bg-zinc-950 p-4 rounded border border-zinc-200 dark:border-zinc-800 leading-relaxed text-zinc-800 dark:text-zinc-200">
                      {selectedPaper.answerKeyContent}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
