'use client';

import React, { useState } from 'react';
import { usePapers } from '@/context/PaperContext';
import { Grade, ExamType, Paper } from '@/types/paper';
import PaperCard from '@/components/PaperCard';

const GRADES: { grade: Grade; label: string }[] = [
  { grade: '9', label: 'Class 9' },
  { grade: '10', label: 'Class 10' },
  { grade: '11', label: 'Class 11' },
  { grade: '12', label: 'Class 12' }
];

// For 9th & 11th: PT-1, PT-2 (Half Yearly), PT-3, PT-4 (Annual)
const EXAMS_9_11: ExamType[] = [
  'PT-1',
  'PT-2 (Half Yearly)',
  'PT-3',
  'PT-4 (Annual)'
];

// For 10th & 12th: PT-1, PT-2 (Half Yearly), Pre-Board 1, Pre-Board 2 (CBSE finals are on CBSE site)
const EXAMS_10_12: ExamType[] = [
  'PT-1',
  'PT-2 (Half Yearly)',
  'Pre-Board 1',
  'Pre-Board 2'
];

const YEARS = [2025, 2024, 2023] as const;

export default function ProgressiveExplorer() {
  const { papers } = usePapers();

  // Mode: 'step' (progressive disclosure) | 'all' (flat complete list)
  const [viewMode, setViewMode] = useState<'step' | 'all'>('step');

  // Progressive states
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedExam, setSelectedExam] = useState<ExamType | 'All' | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'All' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [gradeFilterAll, setGradeFilterAll] = useState<Grade | 'All'>('All');

  const isBoardClass = selectedGrade === '10' || selectedGrade === '12';
  const availableExams = isBoardClass ? EXAMS_10_12 : EXAMS_9_11;

  // Filter papers for Step mode
  const matchingStepPapers = papers.filter((paper) => {
    if (selectedGrade && paper.grade !== selectedGrade) return false;
    if (selectedExam && selectedExam !== 'All' && paper.examType !== selectedExam) return false;
    if (selectedYear && selectedYear !== 'All' && paper.year !== selectedYear) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchSub = paper.subject.toLowerCase().includes(q);
      const matchTitle = paper.title.toLowerCase().includes(q);
      if (!matchSub && !matchTitle) return false;
    }
    return true;
  });

  // Filter papers for "See All" mode
  const matchingAllPapers = papers.filter((paper) => {
    if (gradeFilterAll !== 'All' && paper.grade !== gradeFilterAll) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchSub = paper.subject.toLowerCase().includes(q);
      const matchTitle = paper.title.toLowerCase().includes(q);
      const matchExam = paper.examType.toLowerCase().includes(q);
      if (!matchSub && !matchTitle && !matchExam) return false;
    }
    return true;
  });

  const handleReset = () => {
    setSelectedGrade(null);
    setSelectedExam(null);
    setSelectedYear(null);
    setSearchQuery('');
  };

  /* -------------------------------------------------------------
     VIEW MODE: SEE ALL PAPERS LIST
  ------------------------------------------------------------- */
  if (viewMode === 'all') {
    return (
      <div className="space-y-8 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-900">
          <div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('step')}
                className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                ← Step-by-step
              </button>
              <span className="text-zinc-300">/</span>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                All Question Papers
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Showing {matchingAllPapers.length} papers across all classes
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by subject or exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 border-b border-zinc-200 bg-transparent py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-100"
            />
          </div>
        </div>

        {/* Grade filter tabs for "See all" */}
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <span className="text-zinc-900 dark:text-zinc-100 font-medium">Filter:</span>
          {(['All', '9', '10', '11', '12'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGradeFilterAll(g)}
              className={`transition-colors ${
                gradeFilterAll === g
                  ? 'text-zinc-900 dark:text-zinc-100 font-semibold underline'
                  : 'hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {g === 'All' ? 'All' : `Class ${g}`}
            </button>
          ))}
        </div>

        {/* Papers listing */}
        {matchingAllPapers.length > 0 ? (
          <div>
            {matchingAllPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-sm text-zinc-400">
            No papers found matching your search.
          </div>
        )}
      </div>
    );
  }

  /* -------------------------------------------------------------
     VIEW MODE: PROGRESSIVE STEP-BY-STEP FLOW
  ------------------------------------------------------------- */
  return (
    <div className="space-y-12">
      
      {/* Breadcrumbs when steps are underway */}
      {selectedGrade && (
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-zinc-400">
          <button
            onClick={() => {
              setSelectedGrade(null);
              setSelectedExam(null);
              setSelectedYear(null);
            }}
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Start
          </button>
          <span>/</span>
          <button
            onClick={() => {
              setSelectedExam(null);
              setSelectedYear(null);
            }}
            className={selectedExam ? 'hover:text-zinc-900 dark:hover:text-zinc-100' : 'text-zinc-900 dark:text-zinc-100 font-medium'}
          >
            Class {selectedGrade}
          </button>
          {selectedExam && (
            <>
              <span>/</span>
              <button
                onClick={() => setSelectedYear(null)}
                className={selectedYear ? 'hover:text-zinc-900 dark:hover:text-zinc-100' : 'text-zinc-900 dark:text-zinc-100 font-medium'}
              >
                {selectedExam}
              </button>
            </>
          )}
          {selectedYear && (
            <>
              <span>/</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">{selectedYear}</span>
            </>
          )}
          <button
            onClick={handleReset}
            className="ml-auto text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline"
          >
            Reset
          </button>
        </div>
      )}

      {/* STEP 1: Select Class */}
      {!selectedGrade && (
        <div className="py-8 sm:py-20 text-center space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Select your class
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Choose a class to view past examination question papers
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 max-w-xs sm:max-w-none mx-auto">
            {GRADES.map((g) => (
              <button
                key={g.grade}
                onClick={() => setSelectedGrade(g.grade)}
                className="w-full sm:w-32 py-4 sm:py-5 border border-zinc-200 hover:border-zinc-900 text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-100 font-medium text-sm sm:text-base rounded transition-colors"
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* "See All" trigger button */}
          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 max-w-xs mx-auto">
            <button
              onClick={() => setViewMode('all')}
              className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline transition-colors"
            >
              Or browse all question papers in one list →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Select Examination Type */}
      {selectedGrade && !selectedExam && (
        <div className="py-6 sm:py-10 text-center space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Select examination for Class {selectedGrade}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {isBoardClass ? 'Periodic tests & pre-board examinations' : 'Periodic tests (PT-1 to PT-4)'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-xl mx-auto pt-2">
            {availableExams.map((exam) => (
              <button
                key={exam}
                onClick={() => setSelectedExam(exam)}
                className="px-3.5 sm:px-5 py-2.5 sm:py-3 border border-zinc-200 hover:border-zinc-900 text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-100 text-xs sm:text-sm font-medium rounded transition-colors"
              >
                {exam}
              </button>
            ))}
            <button
              onClick={() => setSelectedExam('All')}
              className="px-3.5 sm:px-5 py-2.5 sm:py-3 border border-dashed border-zinc-200 hover:border-zinc-900 text-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-100 text-xs sm:text-sm rounded transition-colors"
            >
              All Examinations
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Select Academic Year */}
      {selectedGrade && selectedExam && !selectedYear && (
        <div className="py-6 sm:py-10 text-center space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Select examination year
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Class {selectedGrade} • {selectedExam}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto pt-2">
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className="w-full sm:w-28 py-3 sm:py-4 border border-zinc-200 hover:border-zinc-900 text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-100 font-medium text-xs sm:text-sm rounded transition-colors"
              >
                {y}
              </button>
            ))}
            <button
              onClick={() => setSelectedYear('All')}
              className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-4 border border-dashed border-zinc-200 hover:border-zinc-900 text-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-100 text-xs sm:text-sm rounded transition-colors"
            >
              All Years
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Papers Display */}
      {selectedGrade && selectedExam && selectedYear && (
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          
          {/* Active selection summary & search bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-900">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Class {selectedGrade} • {selectedExam}
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Year: {selectedYear} • {matchingStepPapers.length} {matchingStepPapers.length === 1 ? 'paper' : 'papers'} available
              </p>
            </div>

            {/* Quick subject filter */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Filter by subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-zinc-200 bg-transparent py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-100"
              />
            </div>
          </div>

          {/* Papers list */}
          {matchingStepPapers.length > 0 ? (
            <div>
              {matchingStepPapers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-sm text-zinc-400 space-y-3">
              <p>No papers uploaded yet for this specific selection.</p>
              <button
                onClick={() => {
                  setSelectedExam('All');
                  setSelectedYear('All');
                }}
                className="text-xs text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600"
              >
                View all available papers for Class {selectedGrade}
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
