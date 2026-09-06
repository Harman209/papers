'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePapers } from '@/context/PaperContext';
import { Grade, Stream, ExamType, Subject, PaperSet, ExamSection } from '@/types/paper';

const SUBJECT_LIST: Subject[] = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science / IP',
  'English Core',
  'Accountancy',
  'Economics',
  'Business Studies',
  'Science (General)',
  'Social Science',
  'History & Civics',
  'Geography'
];

export default function TeacherUploadPage() {
  const router = useRouter();
  const { addPaper } = usePapers();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Authentication state
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState<Grade>('12');
  const [stream, setStream] = useState<Stream>('Science');
  const [subject, setSubject] = useState<Subject>('Mathematics');
  const [examType, setExamType] = useState<ExamType>('Pre-Board 1');
  const [set, setSet] = useState<PaperSet>('Set A');
  const [year, setYear] = useState<number>(2025);
  const [session, setSession] = useState('2024-2025');
  const [duration, setDuration] = useState('3 Hours');
  const [maxMarks, setMaxMarks] = useState<number>(80);
  const [uploadedBy, setUploadedBy] = useState('Department of Mathematics');
  
  // File drag and drop state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [instructionsInput, setInstructionsInput] = useState(
    'All questions are compulsory.\nUse of calculators is strictly prohibited.\nRead questions carefully before writing.'
  );

  const [sections, setSections] = useState<ExamSection[]>([
    {
      sectionTitle: 'SECTION A - Objective Type Questions',
      instructions: 'Each question carries 1 mark',
      questions: [
        {
          questionNumber: 'Q1',
          marks: 1,
          text: 'Sample objective question for this set...',
          subQuestions: ['(a) Option A', '(b) Option B', '(c) Option C', '(d) Option D']
        }
      ]
    },
    {
      sectionTitle: 'SECTION B - Short Answer Questions',
      instructions: 'Each question carries 2 marks',
      questions: [
        {
          questionNumber: 'Q2',
          marks: 2,
          text: 'Explain the core principles and solve the problem with proper steps.'
        }
      ]
    }
  ]);

  const [hasAnswerKey, setHasAnswerKey] = useState(true);
  const [answerKeyContent, setAnswerKeyContent] = useState(
    'Solutions and marking scheme:\nQ1: (a) Option A.\nQ2: Step 1 (1 Mark) + Step 2 (1 Mark).'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'admin') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generalInstructions = instructionsInput.split('\n').map((i) => i.trim()).filter(Boolean);
    const paperTitle = title || `${subject} - ${examType} ${set !== 'Standard / Common' ? `(${set})` : ''}`;

    addPaper({
      title: paperTitle,
      grade,
      stream,
      subject,
      examType,
      set,
      year: Number(year),
      session,
      duration,
      maxMarks: Number(maxMarks),
      fileName: selectedFile ? selectedFile.name : undefined,
      uploadedBy: uploadedBy || 'Faculty / Library Staff',
      tags: [subject, `Class ${grade}`, examType, set],
      generalInstructions: generalInstructions.length > 0 ? generalInstructions : ['All questions are compulsory.'],
      sections,
      hasAnswerKey,
      answerKeyContent: hasAnswerKey ? answerKeyContent : undefined
    });

    setSuccessToast(true);
    setTimeout(() => {
      router.push('/');
    }, 1200);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm rounded border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-center">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Staff & Faculty Portal
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Swami Sant Dass Public School, Jalandhar
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                Passcode
              </label>
              <input
                type="password"
                placeholder="Enter passcode (1234)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-center font-mono text-zinc-900 focus:border-zinc-400 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                autoFocus
              />
              {pinError && (
                <p className="mt-1 text-xs text-red-600 text-center">
                  Incorrect code. Demo code is 1234.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded bg-zinc-900 py-2 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Sign In
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setPin('1234');
                  setIsAuthenticated(true);
                }}
                className="text-xs text-zinc-400 hover:text-zinc-700 underline"
              >
                Quick demo sign in (1234)
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <div>
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Upload Question Paper
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5">
            Add a newly scanned paper (Set A / Set B) to the archive
          </p>
        </div>
        <Link
          href="/"
          className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Cancel
        </Link>
      </div>

      {successToast && (
        <div className="rounded border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          ✓ Paper published successfully. Redirecting to archive...
        </div>
      )}

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        
        {/* PDF / File Drop Bin */}
        <div className="space-y-1.5">
          <label className="block font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
            Attach Scanned PDF / Document
          </label>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleFileDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-6 sm:p-8 text-center cursor-pointer transition-colors ${
              isDragging
                ? 'border-zinc-900 bg-zinc-100 dark:border-zinc-100 dark:bg-zinc-900'
                : 'border-zinc-200 hover:border-zinc-400 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
            />
            {selectedFile ? (
              <div className="space-y-1">
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                  {selectedFile.name}
                </div>
                <div className="text-xs text-zinc-400">
                  {(selectedFile.size / 1024).toFixed(1)} KB • Ready to attach
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                  className="text-xs text-red-600 underline hover:text-red-800 mt-2 inline-block"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="font-medium text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm">
                  Drag and drop scanned PDF file here, or <span className="underline">browse files</span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Supports PDF, PNG, JPG up to 25MB
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Paper Details */}
        <div className="rounded border border-zinc-200 bg-white p-5 space-y-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
            Paper Information
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Title */}
            <div className="sm:col-span-2">
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Paper Title
              </label>
              <input
                type="text"
                placeholder="e.g. Mathematics - Pre-Board 1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>

            {/* Class */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Class / Grade
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value as Grade)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              >
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            {/* Set Selection (Set A / Set B / Common) */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Question Paper Set
              </label>
              <select
                value={set}
                onChange={(e) => setSet(e.target.value as PaperSet)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-zinc-900 font-medium focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              >
                <option value="Set A">Set A</option>
                <option value="Set B">Set B</option>
                <option value="Standard / Common">Standard / Single Set</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as Subject)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              >
                {SUBJECT_LIST.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Exam Type */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Exam Type
              </label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value as ExamType)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              >
                <option value="PT-1">PT-1</option>
                <option value="PT-2 (Half Yearly)">PT-2 (Half Yearly)</option>
                <option value="PT-3">PT-3</option>
                <option value="PT-4 (Annual)">PT-4 (Annual)</option>
                <option value="Pre-Board 1">Pre-Board 1</option>
                <option value="Pre-Board 2">Pre-Board 2</option>
              </select>
            </div>

            {/* Stream */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Stream (11th & 12th)
              </label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value as Stream)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              >
                <option value="General">General / All</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </select>
            </div>

            {/* Academic Session */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Academic Session
              </label>
              <input
                type="text"
                value={session}
                onChange={(e) => setSession(e.target.value)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Year
              </label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>

            {/* Max Marks & Duration */}
            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Max Marks
              </label>
              <input
                type="number"
                value={maxMarks}
                onChange={(e) => setMaxMarks(Number(e.target.value))}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>

            <div>
              <label className="block text-zinc-600 dark:text-zinc-400 mb-1">
                Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              />
            </div>
          </div>
        </div>

        {/* General Instructions */}
        <div className="rounded border border-zinc-200 bg-white p-5 space-y-2 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
            General Instructions
          </div>
          <textarea
            rows={3}
            value={instructionsInput}
            onChange={(e) => setInstructionsInput(e.target.value)}
            className="w-full rounded border border-zinc-200 bg-zinc-50 p-2 text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            placeholder="Instructions (one per line)..."
          />
        </div>

        {/* Answer Key */}
        <div className="rounded border border-zinc-200 bg-white p-5 space-y-3 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Marking Scheme / Solutions
            </div>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={hasAnswerKey}
                onChange={(e) => setHasAnswerKey(e.target.checked)}
                className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-500"
              />
              <span>Include Solutions</span>
            </label>
          </div>

          {hasAnswerKey && (
            <textarea
              rows={3}
              value={answerKeyContent}
              onChange={(e) => setAnswerKeyContent(e.target.value)}
              className="w-full rounded border border-zinc-200 bg-zinc-50 p-2 font-mono text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              placeholder="Paste answer key or marking scheme for this set..."
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2 pt-2">
          <Link
            href="/"
            className="rounded border border-zinc-200 px-4 py-2 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {isSubmitting ? 'Publishing...' : 'Publish Question Paper'}
          </button>
        </div>
      </form>

    </div>
  );
}
