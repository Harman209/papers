'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Paper, PaperFilterState, Grade, Stream, ExamType, Subject } from '@/types/paper';
import { INITIAL_PAPERS } from '@/data/mockPapers';

interface PaperContextType {
  papers: Paper[];
  bookmarkedIds: string[];
  filters: PaperFilterState;
  setFilters: React.Dispatch<React.SetStateAction<PaperFilterState>>;
  addPaper: (paper: Omit<Paper, 'id' | 'uploadedAt' | 'downloadsCount' | 'viewsCount'>) => void;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  incrementDownload: (id: string) => void;
  incrementView: (id: string) => void;
  selectedPaper: Paper | null;
  setSelectedPaper: (paper: Paper | null) => void;
  filteredPapers: Paper[];
  resetFilters: () => void;
}

const DEFAULT_FILTERS: PaperFilterState = {
  searchQuery: '',
  grade: 'All',
  stream: 'All',
  subject: 'All',
  examType: 'All',
  year: 'All',
  hasAnswerKeyOnly: false,
  sortBy: 'latest'
};

const PaperContext = createContext<PaperContextType | undefined>(undefined);

export function PaperProvider({ children }: { children: React.ReactNode }) {
  const [papers, setPapers] = useState<Paper[]>(INITIAL_PAPERS);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [filters, setFilters] = useState<PaperFilterState>(DEFAULT_FILTERS);
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCustomPapers = localStorage.getItem('school_papers_custom');
      if (savedCustomPapers) {
        const parsed = JSON.parse(savedCustomPapers);
        setPapers([...parsed, ...INITIAL_PAPERS]);
      }
      const savedBookmarks = localStorage.getItem('school_papers_bookmarks');
      if (savedBookmarks) {
        setBookmarkedIds(JSON.parse(savedBookmarks));
      }
    } catch {
      // Ignore fallback
    }
  }, []);

  const addPaper = (newPaperData: Omit<Paper, 'id' | 'uploadedAt' | 'downloadsCount' | 'viewsCount'>) => {
    const newPaper: Paper = {
      ...newPaperData,
      id: `paper-${Date.now()}`,
      uploadedAt: new Date().toISOString().split('T')[0],
      downloadsCount: 0,
      viewsCount: 1
    };

    const updatedPapers = [newPaper, ...papers];
    setPapers(updatedPapers);

    try {
      const savedCustomPapers = localStorage.getItem('school_papers_custom');
      const existing = savedCustomPapers ? JSON.parse(savedCustomPapers) : [];
      localStorage.setItem('school_papers_custom', JSON.stringify([newPaper, ...existing]));
    } catch {
      // Ignore
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('school_papers_bookmarks', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  const incrementDownload = (id: string) => {
    setPapers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, downloadsCount: p.downloadsCount + 1 } : p))
    );
  };

  const incrementView = (id: string) => {
    setPapers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, viewsCount: p.viewsCount + 1 } : p))
    );
  };

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  // Filter calculation
  const filteredPapers = papers.filter((paper) => {
    // Search query
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      const matchTitle = paper.title.toLowerCase().includes(query);
      const matchSubject = paper.subject.toLowerCase().includes(query);
      const matchExam = paper.examType.toLowerCase().includes(query);
      const matchTags = paper.tags.some((t) => t.toLowerCase().includes(query));
      if (!matchTitle && !matchSubject && !matchExam && !matchTags) return false;
    }

    // Grade
    if (filters.grade !== 'All' && paper.grade !== filters.grade) return false;

    // Stream
    if (filters.stream !== 'All' && paper.stream !== filters.stream && paper.stream !== 'General') {
      return false;
    }

    // Subject
    if (filters.subject !== 'All' && paper.subject !== filters.subject) return false;

    // Exam Type
    if (filters.examType !== 'All' && paper.examType !== filters.examType) return false;

    // Year
    if (filters.year !== 'All' && paper.year !== filters.year) return false;

    // Answer Key
    if (filters.hasAnswerKeyOnly && !paper.hasAnswerKey) return false;

    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'latest') return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
    if (filters.sortBy === 'popular') return (b.downloadsCount + b.viewsCount) - (a.downloadsCount + a.viewsCount);
    if (filters.sortBy === 'yearDesc') return b.year - a.year;
    if (filters.sortBy === 'yearAsc') return a.year - b.year;
    return 0;
  });

  return (
    <PaperContext.Provider
      value={{
        papers,
        bookmarkedIds,
        filters,
        setFilters,
        addPaper,
        toggleBookmark,
        isBookmarked,
        incrementDownload,
        incrementView,
        selectedPaper,
        setSelectedPaper,
        filteredPapers,
        resetFilters
      }}
    >
      {children}
    </PaperContext.Provider>
  );
}

export function usePapers() {
  const context = useContext(PaperContext);
  if (!context) {
    throw new Error('usePapers must be used within a PaperProvider');
  }
  return context;
}
