'use client';

import React from 'react';
import { usePapers } from '@/context/PaperContext';
import { Grade, ExamType, Subject } from '@/types/paper';

const GRADES: Grade[] = ['9', '10', '11', '12'];

const EXAMS_FOR_9_AND_11: { label: string; value: ExamType | 'All' }[] = [
  { label: 'All Exams', value: 'All' },
  { label: 'PT-1', value: 'PT-1' },
  { label: 'PT-2 (Half Yearly)', value: 'PT-2 (Half Yearly)' },
  { label: 'PT-3', value: 'PT-3' },
  { label: 'PT-4 (Annual)', value: 'PT-4 (Annual)' }
];

const EXAMS_FOR_10_AND_12: { label: string; value: ExamType | 'All' }[] = [
  { label: 'All Exams', value: 'All' },
  { label: 'PT-1', value: 'PT-1' },
  { label: 'PT-2 (Half Yearly)', value: 'PT-2 (Half Yearly)' },
  { label: 'Pre-Board 1', value: 'Pre-Board 1' },
  { label: 'Pre-Board 2', value: 'Pre-Board 2' }
];

const YEARS = ['All', 2025, 2024, 2023, 2022] as const;

export default function SearchFilters() {
  const { filters, setFilters, resetFilters, filteredPapers } = usePapers();

  // Active grade default to 9 if All is set or keep current
  const currentGrade = filters.grade === 'All' ? '12' : filters.grade;
  const isBoardClass = currentGrade === '10' || currentGrade === '12';
  const availableExams = isBoardClass ? EXAMS_FOR_10_AND_12 : EXAMS_FOR_9_AND_11;

  const handleGradeChange = (g: Grade) => {
    setFilters((prev) => ({
      ...prev,
      grade: g,
      examType: 'All' // Reset exam when changing grade
    }));
  };

  return (
    <div className="space-y-6 pt-2">
      
      {/* 1. Class Selection */}
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
          1. Select Class
        </div>
        <div className="flex items-center gap-6 sm:gap-8 text-base">
          {GRADES.map((g) => {
            const isSelected = filters.grade === g || (filters.grade === 'All' && g === '12');
            return (
              <button
                key={g}
                onClick={() => handleGradeChange(g)}
                className={`pb-1 transition-colors ${
                  isSelected
                    ? 'border-b-2 border-zinc-900 text-zinc-900 font-semibold dark:border-zinc-100 dark:text-zinc-100'
                    : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                Class {g}th
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Examination Type Selection */}
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
          2. Examination
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
          {availableExams.map((ex) => {
            const isSelected = filters.examType === ex.value;
            return (
              <button
                key={ex.label}
                onClick={() => setFilters((prev) => ({ ...prev, examType: ex.value }))}
                className={`rounded px-3 py-1.5 transition-colors text-xs sm:text-sm ${
                  isSelected
                    ? 'bg-zinc-900 text-white font-medium dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                {ex.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Year & Keyword Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-900">
        
        {/* Year Tabs */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-zinc-400">Year:</span>
          {YEARS.map((y) => {
            const isSelected = filters.year === y;
            return (
              <button
                key={y}
                onClick={() => setFilters((prev) => ({ ...prev, year: y === 'All' ? 'All' : Number(y) }))}
                className={`transition-colors ${
                  isSelected
                    ? 'text-zinc-900 font-semibold dark:text-zinc-100 underline'
                    : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                {y === 'All' ? 'All Years' : y}
              </button>
            );
          })}
        </div>

        {/* Quick Subject or Keyword Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Filter by subject (e.g. Maths, Physics)..."
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            className="w-full bg-transparent border-b border-zinc-200 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-100"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-zinc-400 hover:text-zinc-900"
            >
              Clear
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
