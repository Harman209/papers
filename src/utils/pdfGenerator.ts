import { jsPDF } from 'jspdf';
import { Paper } from '@/types/paper';

export function generatePaperPdf(paper: Paper, options: { includeAnswers?: boolean } = {}): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 15;
  const marginRight = 15;
  const marginTop = 18;
  const marginBottom = 18;
  const contentWidth = pageWidth - marginLeft - marginRight;

  let y = marginTop;

  const checkAddPage = (requiredSpace: number) => {
    if (y + requiredSpace > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('SWAMI SANT DASS PUBLIC SCHOOL, JALANDHAR', pageWidth / 2, y, { align: 'center' });
  y += 6;

  doc.setFontSize(11);
  const examTitle = `${paper.examType.toUpperCase()} EXAMINATION (${paper.session})`;
  doc.text(examTitle, pageWidth / 2, y, { align: 'center' });
  y += 5.5;

  doc.setFontSize(10);
  const streamInfo = paper.stream && paper.stream !== 'General' ? ` (${paper.stream.toUpperCase()})` : '';
  const setInfo = paper.set && paper.set !== 'Standard / Common' ? ` • ${paper.set.toUpperCase()}` : '';
  const subjectLine = `CLASS ${paper.grade}TH${streamInfo} — ${paper.subject.toUpperCase()}${setInfo}`;
  doc.text(subjectLine, pageWidth / 2, y, { align: 'center' });
  y += 5;

  // Horizontal divider
  doc.setLineWidth(0.4);
  doc.setDrawColor(40, 40, 40);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 4.5;

  // Time and Max Marks
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(`Time Allowed: ${paper.duration}`, marginLeft, y);
  doc.text(`Maximum Marks: ${paper.maxMarks}`, pageWidth - marginRight, y, { align: 'right' });
  y += 4;

  doc.setLineWidth(0.2);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 6;

  // --- GENERAL INSTRUCTIONS ---
  if (paper.generalInstructions && paper.generalInstructions.length > 0) {
    checkAddPage(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('GENERAL INSTRUCTIONS:', marginLeft, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    paper.generalInstructions.forEach((ins, idx) => {
      const insText = `${idx + 1}. ${ins}`;
      const lines = doc.splitTextToSize(insText, contentWidth);
      checkAddPage(lines.length * 4 + 1);
      doc.text(lines, marginLeft, y);
      y += lines.length * 4;
    });
    y += 4;
  }

  // --- SECTIONS & QUESTIONS ---
  paper.sections.forEach((section) => {
    checkAddPage(16);

    // Section Header Banner
    doc.setLineWidth(0.2);
    doc.setDrawColor(80, 80, 80);
    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 4;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(section.sectionTitle.toUpperCase(), marginLeft, y);
    y += 4;

    if (section.instructions) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      doc.text(`(${section.instructions})`, marginLeft, y);
      y += 4.5;
    }

    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 5;

    // Questions
    section.questions.forEach((q) => {
      checkAddPage(14);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      const qNum = `${q.questionNumber}.`;
      doc.text(qNum, marginLeft, y);

      // Marks on the right
      doc.text(`[${q.marks}]`, pageWidth - marginRight, y, { align: 'right' });

      // Question text
      doc.setFont('helvetica', 'normal');
      const qTextLines = doc.splitTextToSize(q.text, contentWidth - 18);
      doc.text(qTextLines, marginLeft + 8, y);
      y += qTextLines.length * 4 + 1.5;

      // Sub-questions / MCQ options
      if (q.subQuestions && q.subQuestions.length > 0) {
        q.subQuestions.forEach((sub) => {
          const subLines = doc.splitTextToSize(sub, contentWidth - 20);
          checkAddPage(subLines.length * 4 + 1);
          doc.text(subLines, marginLeft + 12, y);
          y += subLines.length * 4;
        });
        y += 1.5;
      }

      // Alternative OR question
      if (q.orAlternative) {
        checkAddPage(14);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.text('— OR —', pageWidth / 2, y + 1, { align: 'center' });
        y += 5;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        const orLines = doc.splitTextToSize(q.orAlternative, contentWidth - 18);
        checkAddPage(orLines.length * 4 + 1);
        doc.text(orLines, marginLeft + 8, y);
        y += orLines.length * 4 + 2;
      }

      y += 2.5;
    });

    y += 3;
  });

  // End of Question Paper Footer line
  checkAddPage(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('*** END OF QUESTION PAPER • SWAMI SANT DASS PUBLIC SCHOOL ***', pageWidth / 2, y, { align: 'center' });
  y += 6;

  // --- OPTIONAL SOLUTIONS / MARKING SCHEME ---
  if (options.includeAnswers && paper.hasAnswerKey && paper.answerKeyContent) {
    doc.addPage();
    y = marginTop;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('MARKING SCHEME & VERIFIED SOLUTIONS', pageWidth / 2, y, { align: 'center' });
    y += 5;

    doc.setFontSize(9.5);
    doc.text(`CLASS ${paper.grade}TH — ${paper.subject.toUpperCase()} (${paper.examType.toUpperCase()})`, pageWidth / 2, y, { align: 'center' });
    y += 5;

    doc.setLineWidth(0.3);
    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const ansLines = doc.splitTextToSize(paper.answerKeyContent, contentWidth);
    
    ansLines.forEach((line: string) => {
      checkAddPage(5);
      doc.text(line, marginLeft, y);
      y += 4.5;
    });
  }

  // --- NUMBER ALL PAGES ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setDrawColor(200, 200, 200);
    doc.line(marginLeft, pageHeight - 12, pageWidth - marginRight, pageHeight - 12);
    doc.text('Swami Sant Dass Public School, Jalandhar', marginLeft, pageHeight - 8);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - marginRight, pageHeight - 8, { align: 'right' });
  }

  return doc;
}

export function downloadPaperPdf(paper: Paper, options: { includeAnswers?: boolean } = {}) {
  const doc = generatePaperPdf(paper, options);
  const cleanSubject = paper.subject.replace(/[^a-zA-Z0-9]/g, '_');
  const cleanSet = paper.set && paper.set !== 'Standard / Common' ? `_${paper.set.replace(/[^a-zA-Z0-9]/g, '_')}` : '';
  const filename = `SSDPS_${cleanSubject}_Class${paper.grade}${cleanSet}_${paper.year}.pdf`;
  doc.save(filename);
}

export function getPaperPdfBlobUrl(paper: Paper, options: { includeAnswers?: boolean } = {}): string {
  const doc = generatePaperPdf(paper, options);
  return doc.output('bloburl').toString();
}
