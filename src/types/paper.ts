export type Grade = '9' | '10' | '11' | '12';

export type Stream = 'Science' | 'Commerce' | 'General';

export type PaperSet = 'Set A' | 'Set B' | 'Standard / Common';

export type ExamType = 
  | 'PT-1'
  | 'PT-2 (Half Yearly)'
  | 'PT-3'
  | 'PT-4 (Annual)'
  | 'Pre-Board 1'
  | 'Pre-Board 2';

export type Subject = 
  // 9th & 10th Subjects
  | 'English'
  | 'Mathematics (Standard)'
  | 'Mathematics (Basic)'
  | 'Science'
  | 'Social Science (SST)'
  | 'Punjabi'
  | 'Hindi'
  | 'Artificial Intelligence (AI)'
  | 'Marketing'
  // 11th & 12th Subjects
  | 'Physics'
  | 'Chemistry'
  | 'Mathematics'
  | 'Biology'
  | 'Computer Science'
  | 'Painting'
  | 'Psychology'
  | 'Accountancy'
  | 'Business Studies'
  | 'Economics'
  | 'English Core'
  | 'Physical Education';

export interface ExamQuestion {
  questionNumber: string;
  marks: number;
  text: string;
  subQuestions?: string[];
  orAlternative?: string;
}

export interface ExamSection {
  sectionTitle: string;
  instructions: string;
  questions: ExamQuestion[];
}

export interface Paper {
  id: string;
  title: string;
  grade: Grade;
  stream: Stream;
  subject: Subject;
  examType: ExamType;
  set?: PaperSet;
  year: number;
  session: string; // e.g., '2024-2025'
  duration: string;
  maxMarks: number;
  fileUrl?: string;
  fileName?: string;
  hasAnswerKey: boolean;
  answerKeyContent?: string;
  uploadedAt: string;
  uploadedBy: string;
  downloadsCount: number;
  viewsCount: number;
  tags: string[];
  description?: string;
  generalInstructions: string[];
  sections: ExamSection[];
}

export interface PaperFilterState {
  searchQuery: string;
  grade: Grade | 'All';
  stream: Stream | 'All';
  subject: Subject | 'All';
  examType: ExamType | 'All';
  set?: PaperSet | 'All';
  year: number | 'All';
  hasAnswerKeyOnly: boolean;
  sortBy: 'latest' | 'popular' | 'yearDesc' | 'yearAsc';
}
