import { Grade, Stream, Subject } from '@/types/paper';

export const SUBJECTS_9_10: Subject[] = [
  'English',
  'Mathematics (Standard)',
  'Mathematics (Basic)',
  'Science',
  'Social Science (SST)',
  'Punjabi',
  'Hindi',
  'Artificial Intelligence (AI)',
  'Marketing'
];

export const SUBJECTS_11_12_SCIENCE: Subject[] = [
  'Physics',
  'Chemistry',
  'Mathematics',
  'Biology',
  'Computer Science',
  'Painting',
  'Psychology',
  'English Core',
  'Physical Education'
];

export const SUBJECTS_11_12_COMMERCE: Subject[] = [
  'Accountancy',
  'Business Studies',
  'Economics',
  'Mathematics',
  'Painting',
  'Psychology',
  'English Core',
  'Physical Education',
  'Computer Science'
];

export function getAvailableSubjects(grade: Grade, stream?: Stream): Subject[] {
  if (grade === '9' || grade === '10') {
    return SUBJECTS_9_10;
  }
  if (stream === 'Commerce') {
    return SUBJECTS_11_12_COMMERCE;
  }
  if (stream === 'Science') {
    return SUBJECTS_11_12_SCIENCE;
  }
  // If all or unspecified for 11/12:
  const set = new Set([...SUBJECTS_11_12_SCIENCE, ...SUBJECTS_11_12_COMMERCE]);
  return Array.from(set);
}
