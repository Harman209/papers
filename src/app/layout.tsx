import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PaperProvider } from "@/context/PaperContext";
import Navbar from "@/components/Navbar";
import PaperViewerModal from "@/components/PaperViewerModal";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swami Sant Dass Public School, Jalandhar — Question Paper Archive",
  description: "Digital past question papers repository for Classes 9th, 10th, 11th, and 12th at Swami Sant Dass Public School, Jalandhar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('papers_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans">
        <PaperProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <PaperViewerModal />
          
          {/* Minimal Clean Footer */}
          <footer className="border-t border-zinc-100 bg-white dark:border-zinc-900 dark:bg-zinc-950 py-6 px-6 sm:px-8 text-xs text-zinc-400">
            <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <a
                  href="https://swamisantdass.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Swami Sant Dass Public School, Jalandhar
                </a>
                <span>•</span>
                <span>Library Archive</span>
              </div>

              <div className="flex items-center gap-5">
                <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Archive
                </Link>
                <Link href="/admin/upload" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Staff Upload
                </Link>
                <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  About
                </Link>
                <a
                  href="https://github.com/Harman209/papers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  MIT License / Contribute
                </a>
              </div>
            </div>
          </footer>
        </PaperProvider>
      </body>
    </html>
  );
}
