# AGENTS.md — Contributor & AI Agent Guidelines

Welcome to **papers** (`papers-ssdps.vercel.app`), the open digital past question paper archive built for students at **Swami Sant Dass Public School (SSDPS), Jalandhar** (Classes 9th through 12th).

This document outlines the project intentions, design philosophy, academic curriculum rules, and technical standards for both human contributors and AI coding assistants.

---

## 1. Project Intentions & Mission

- **Core Goal**: Provide students and teachers with instant, 24/7 in-browser access to past examination question papers and marking schemes (Sets A & B) without physical library queues or photocopy bottlenecks.
- **Guiding Principle**: *"Built by students, for students."*
- **Cost Policy**: Zero financial cost to the school ($0 hosting on serverless edge networks).
- **Open Access**: No paywalls, no forced account logins for students, and no bloated ads or trackers.

---

## 2. Design & Communication Aesthetics

- **Minimalist & Spacious**: Editorial, clean row-based layout. Avoid heavy boxiness, gradients, glows, or AI-generated visual clutter.
- **Copy Tone**:
  - Personal bios, messages, and student-facing copy follow a relaxed, minimalist **lowercase aesthetic**.
  - Proper name must always be capitalized as **Harman Kajla**.
  - Avoid corporate fluff, sales pitches, or artificial pleasantries.
- **Theme Default**:
  - Must default to the user's system dark / light preference on first load with zero visual flicker (FOUC).

---

## 3. SSDPS Curriculum & Academic Rules (Strict Invariants)

Any changes to filtering, datasets, or upload forms must strictly respect the school's structure:

### A. Class & Stream Separation
- **Classes 9th & 10th**:
  - **No streams**. Stream selection must be hidden or disabled.
  - **Subjects**: English, Maths (Standard), Maths (Basic), Science, Social Science (SST), Punjabi, Hindi, Artificial Intelligence (AI), Marketing.
- **Classes 11th & 12th**:
  - **Science** and **Commerce** streams only.
  - **NO Humanities** (SSDPS does not offer Humanities / Arts).
  - *Science Subjects*: Physics, Chemistry, Mathematics, Biology, Computer Science, Painting, Psychology, English Core, Physical Education.
  - *Commerce Subjects*: Accountancy, Business Studies, Economics, Mathematics, Painting, Psychology, English Core, Physical Education, Computer Science.

### B. Examination Categories
- **Classes 9th & 11th**: `PT-1`, `PT-2 (Half Yearly)`, `PT-3`, `PT-4 (Annual)`.
- **Classes 10th & 12th (Board Classes)**: `PT-1`, `PT-2 (Half Yearly)`, `Pre-Board 1`, `Pre-Board 2`.
  *(Note: Final CBSE Board Exams are conducted by CBSE directly and are not local school master papers).*

### C. Multi-Set Support
- Always support `Set A`, `Set B`, and `Standard / Common` tags for all examination types.

---

## 4. Document & PDF Standards

- **Real PDF Generation**: All document downloads and modal viewing must use authentic `.pdf` documents generated via `jspdf` (`src/utils/pdfGenerator.ts`).
- **Never Fall Back to `.txt`**: Do not export raw text files for paper downloads.
- **Viewer Modes**: The reader modal embeds the PDF document directly (`<iframe>` / `<object>`) with options to view solutions, download the PDF, or open it in a raw browser tab (`Open Tab ↗`).

---

## 5. Codebase Architecture & File Map

- **Framework**: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4.
- **Key Modules**:
  - `src/types/paper.ts`: Core TypeScript types for Grades, Streams, Subjects, Sets, and Papers.
  - `src/data/subjectConfig.ts`: Helper mapping exact SSDPS subjects per class and stream.
  - `src/data/mockPapers.ts`: Preloaded authentic question paper datasets.
  - `src/utils/pdfGenerator.ts`: Client-side A4 PDF generator (`generatePaperPdf`, `downloadPaperPdf`, `getPaperPdfBlobUrl`).
  - `src/context/PaperContext.tsx`: React state context with LocalStorage caching and search filters.
  - `src/components/ProgressiveExplorer.tsx`: Step-by-step disclosure flow (`Class` → `Exam` → `Year` → Papers).
  - `src/components/PaperViewerModal.tsx`: In-browser PDF document reader with toolbar.
  - `src/components/PaperCard.tsx`: Row component with Set badge, read trigger, and direct PDF download.
  - `src/app/admin/upload/page.tsx`: Faculty upload portal with drag-and-drop document attachment.

---

## 6. Mobile Responsiveness & Testing

- **Mobile First**: All pages and modals must fit mobile screens (320px–400px) cleanly with zero horizontal scroll jitter.
- **Automated Tests**: Run `npm test` (`scripts/run-tests.mjs`) to verify all 13 core academic invariants and security checks.
- **Build Verification**: Run `npm run build` to ensure static generation and TypeScript checks pass before committing.

---

## 7. How to Contribute

1. **Adding Question Papers**:
   - Add new paper objects to `src/data/mockPapers.ts` or upload via the `/admin/upload` portal.
   - Ensure the `grade`, `stream`, `examType`, `set`, `year`, and structured sections match the school format.
2. **Marking Schemes**:
   - Provide verified solutions in `answerKeyContent` with `hasAnswerKey: true`.
3. **Curriculum Alignment**:
   - Update `src/data/subjectConfig.ts` if the school introduces new elective subjects.
