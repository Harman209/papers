# 📚 OpenPaper — School Question Paper Digital Archive

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)
[![Grades](https://img.shields.io/badge/Classes-9th%20to%2012th-indigo)](https://github.com/Harman209/papers)

> A modern, open-source web application designed to digitize physical school library question papers for students in **Grades 9th, 10th, 11th, and 12th**. Provides 24/7 exam revision access, fast search filters, solution keys, in-browser reading, and a teacher contribution portal.

---

## 🌟 Features

- **🔍 Multi-Level Instant Filter Engine**:
  - **Grades**: Class 9th, 10th, 11th, 12th
  - **Streams (for 11th & 12th)**: Science (PCM/PCB/CS), Commerce, Humanities / Arts
  - **Exam Categories**: Unit Tests, Mid-Terms / Half-Yearly, Pre-Boards (1 & 2), Annual / Board Exams
  - **Subjects**: Mathematics, Physics, Chemistry, Biology, Computer Science (Python), English Core, Accountancy, Economics, Social Science, and more.
- **📄 In-Browser Document & PDF Viewer**:
  - Interactive exam format preview with official instructions and sections.
  - Zoom in/out, print simulator (`window.print()`), and instant text/PDF file download.
  - Toggleable official teacher solution keys & marking schemes.
- **📌 Saved Papers / Bookmarks**:
  - Students can bookmark challenging exam papers to quickly revisit during final board preparation.
- **👩‍🏫 Faculty / Staff Upload Portal**:
  - Drag-and-drop scanner upload with metadata tagging.
  - Demo PIN code protection (`1234`) ensuring only authorized faculty can publish official question papers.
- **📊 Executive Principal Pitch View (`/pitch`)**:
  - Dedicated presentation dashboard outlining the school benefits, $0 cloud hosting blueprint, and library paperless initiative.

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Harman209/papers.git
cd papers
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🏛️ Pitching to the School Principal

When presenting this project to school leadership, navigate to `/pitch` or use these primary talking points:

1. **Academic Equity**: Eliminates library queues and master copy bottlenecks so every student can prepare for board exams from home.
2. **Zero Financial Cost**: Designed to run seamlessly on free tiers (Vercel Serverless + Supabase / Cloudflare R2 / GitHub Pages).
3. **Eco-Friendly Paperless Campus**: Saves hundreds of photocopies and master prints per academic session.
4. **Staff-Controlled Publishing**: Moderated upload portal prevents unauthorized or invalid uploads.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Storage**: React Context + LocalStorage persistence

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
