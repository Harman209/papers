import { Paper } from '@/types/paper';

export const INITIAL_PAPERS: Paper[] = [
  // Class 12 Science
  {
    id: 'paper-12-math-pb1-setA-2025',
    title: 'Mathematics - Pre-Board 1 (Set A)',
    grade: '12',
    stream: 'Science',
    subject: 'Mathematics',
    examType: 'Pre-Board 1',
    set: 'Set A',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-15',
    uploadedBy: 'Department of Mathematics',
    downloadsCount: 342,
    viewsCount: 1250,
    tags: ['Calculus', 'Vectors', '3D Geometry', 'Matrices'],
    description: 'Pre-Board 1 Mathematics paper (Set A) for Class 12.',
    generalInstructions: ['38 questions in total across 5 Sections A-E.'],
    sections: [
      {
        sectionTitle: 'SECTION A - MCQs (1 Mark each)',
        instructions: 'Select the correct option.',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'If A is a square matrix of order 3 such that |adj(A)| = 64, then the value of |A| is:',
            subQuestions: ['(a) ±8', '(b) ±4', '(c) 64', '(d) ±2']
          },
          {
            questionNumber: 'Q2',
            marks: 1,
            text: 'Evaluate: ∫ eˣ (1/x - 1/x²) dx'
          }
        ]
      }
    ],
    answerKeyContent: 'Solutions (Set A):\nQ1: |adj(A)| = |A|² = 64 => |A| = ±8 (Option a).\nQ2: eˣ/x + C.'
  },
  {
    id: 'paper-12-math-pb1-setB-2025',
    title: 'Mathematics - Pre-Board 1 (Set B)',
    grade: '12',
    stream: 'Science',
    subject: 'Mathematics',
    examType: 'Pre-Board 1',
    set: 'Set B',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-15',
    uploadedBy: 'Department of Mathematics',
    downloadsCount: 310,
    viewsCount: 1100,
    tags: ['Calculus', 'Vectors', 'Matrices'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'SECTION A - MCQs (1 Mark each)',
        instructions: 'Select the correct option.',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'If A is a square matrix of order 3 such that |A| = 4, then |adj(2A)| is:',
            subQuestions: ['(a) 64', '(b) 256', '(c) 1024', '(d) 512']
          }
        ]
      }
    ],
    answerKeyContent: 'Solutions (Set B):\nQ1: |adj(2A)| = |2A|² = (8·4)² = 1024 (Option c).'
  },
  {
    id: 'paper-12-phys-pb2-setA-2025',
    title: 'Physics - Pre-Board 2 (Set A)',
    grade: '12',
    stream: 'Science',
    subject: 'Physics',
    examType: 'Pre-Board 2',
    set: 'Set A',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2025-01-20',
    uploadedBy: 'Department of Physics',
    downloadsCount: 289,
    viewsCount: 980,
    tags: ['Electrostatics', 'Optics', 'Semiconductors'],
    generalInstructions: ['35 questions in all. All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A - MCQs',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'An electric dipole of dipole moment p is placed in a uniform electric field E. The torque is maximum when angle between p and E is:',
            subQuestions: ['(a) 0°', '(b) 90°', '(c) 180°', '(d) 45°']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (b) 90°'
  },
  {
    id: 'paper-12-chem-pb1-2025',
    title: 'Chemistry - Pre-Board 1',
    grade: '12',
    stream: 'Science',
    subject: 'Chemistry',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2025-01-18',
    uploadedBy: 'Department of Chemistry',
    downloadsCount: 260,
    viewsCount: 890,
    tags: ['Solutions', 'Electrochemistry', 'Chemical Kinetics'],
    generalInstructions: ['33 questions in total.'],
    sections: [
      {
        sectionTitle: 'Section A - Objective',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Which of the following colligative properties is most suitable for determining molecular mass of polymers and proteins?',
            subQuestions: ['(a) Osmotic pressure', '(b) Relative lowering of vapour pressure', '(c) Elevation in boiling point', '(d) Depression in freezing point']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) Osmotic pressure (measured at room temperature and has significant magnitude).'
  },
  {
    id: 'paper-12-cs-pb1-2025',
    title: 'Computer Science - Pre-Board 1',
    grade: '12',
    stream: 'Science',
    subject: 'Computer Science',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2025-01-22',
    uploadedBy: 'Dept of Computer Science',
    downloadsCount: 310,
    viewsCount: 1050,
    tags: ['Python', 'SQL', 'Data Structures', 'Networking'],
    generalInstructions: ['All programming questions to be answered in Python 3.x.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'What will be the output of: print([i for i in range(1, 10, 2) if i % 3 == 0])?',
            subQuestions: ['(a) [3, 9]', '(b) [3, 6, 9]', '(c) [1, 3, 5]', '(d) [9]']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) [3, 9]'
  },
  {
    id: 'paper-12-psych-pb1-2025',
    title: 'Psychology - Pre-Board 1',
    grade: '12',
    stream: 'Science',
    subject: 'Psychology',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2025-01-21',
    uploadedBy: 'Dept of Psychology',
    downloadsCount: 140,
    viewsCount: 430,
    tags: ['Variations in Psychological Attributes', 'Self and Personality'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: 'Objective',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The PASS theory of intelligence was developed by:',
            subQuestions: ['(a) J.P. Das, Jack Naglieri and Kirby', '(b) Howard Gardner', '(c) Charles Spearman', '(d) Robert Sternberg']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) J.P. Das, Jack Naglieri and Kirby.'
  },
  {
    id: 'paper-12-painting-pb1-2025',
    title: 'Painting - Pre-Board 1',
    grade: '12',
    stream: 'Science',
    subject: 'Painting',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '2 Hours',
    maxMarks: 30,
    hasAnswerKey: true,
    uploadedAt: '2025-01-20',
    uploadedBy: 'Fine Arts Department',
    downloadsCount: 180,
    viewsCount: 520,
    tags: ['Rajasthani School', 'Mughal School', 'Modern Indian Art'],
    generalInstructions: ['Theory examination: 30 Marks.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The famous painting "Maru Ragini" belongs to which sub-school of Rajasthani miniature painting?',
            subQuestions: ['(a) Mewar', '(b) Bundi', '(c) Kishangarh', '(d) Jaipur']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) Mewar.'
  },

  // Class 11 Science
  {
    id: 'paper-11-math-pt1-setA-2024',
    title: 'Mathematics - PT-1 (Set A)',
    grade: '11',
    stream: 'Science',
    subject: 'Mathematics',
    examType: 'PT-1',
    set: 'Set A',
    year: 2024,
    session: '2024-2025',
    duration: '1.5 Hours',
    maxMarks: 40,
    hasAnswerKey: true,
    uploadedAt: '2024-05-18',
    uploadedBy: 'Dept of Mathematics',
    downloadsCount: 180,
    viewsCount: 520,
    tags: ['Sets', 'Relations', 'Trigonometry'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'If set A has 3 elements and set B has 2 elements, find the total number of relations from A to B.'
          }
        ]
      }
    ],
    answerKeyContent: 'Total relations = 2^(3*2) = 2^6 = 64.'
  },
  {
    id: 'paper-11-phys-pt1-2024',
    title: 'Physics - PT-1',
    grade: '11',
    stream: 'Science',
    subject: 'Physics',
    examType: 'PT-1',
    set: 'Standard / Common',
    year: 2024,
    session: '2024-2025',
    duration: '1.5 Hours',
    maxMarks: 40,
    hasAnswerKey: true,
    uploadedAt: '2024-05-16',
    uploadedBy: 'Physics Dept',
    downloadsCount: 195,
    viewsCount: 580,
    tags: ['Units & Measurements', 'Motion in a Straight Line'],
    generalInstructions: ['Time: 1.5 Hours. Max Marks: 40.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'State the number of significant figures in 0.00250 kg.'
          }
        ]
      }
    ],
    answerKeyContent: '3 significant figures (2, 5, 0).'
  },
  {
    id: 'paper-11-chem-pt2-2024',
    title: 'Chemistry - PT-2 (Half Yearly)',
    grade: '11',
    stream: 'Science',
    subject: 'Chemistry',
    examType: 'PT-2 (Half Yearly)',
    set: 'Standard / Common',
    year: 2024,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2024-09-24',
    uploadedBy: 'Chemistry Dept',
    downloadsCount: 290,
    viewsCount: 880,
    tags: ['Structure of Atom', 'Chemical Bonding', 'Periodic Properties'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The shape of ClF3 molecule according to VSEPR theory is:',
            subQuestions: ['(a) T-shaped', '(b) Trigonal planar', '(c) Trigonal bipyramidal', '(d) Bent']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) T-shaped (sp³d hybridization with 3 bond pairs and 2 lone pairs).'
  },

  // Class 10 (No Stream - Subjects: English, Maths Standard/Basic, Punjabi, Hindi, SST, Science, AI, Marketing)
  {
    id: 'paper-10-math-std-pb1-2025',
    title: 'Mathematics (Standard) - Pre-Board 1 (Set A)',
    grade: '10',
    stream: 'General',
    subject: 'Mathematics (Standard)',
    examType: 'Pre-Board 1',
    set: 'Set A',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-10',
    uploadedBy: 'Class 10 Faculty',
    downloadsCount: 540,
    viewsCount: 1780,
    tags: ['Trigonometry', 'Quadratic Equations', 'Statistics'],
    generalInstructions: ['38 questions in total. Standard curriculum paper.'],
    sections: [
      {
        sectionTitle: 'Section A - 20 MCQs',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:',
            subQuestions: ['(a) xy', '(b) xy²', '(c) x³y³', '(d) x²y²']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (b) xy²'
  },
  {
    id: 'paper-10-math-basic-pb1-2025',
    title: 'Mathematics (Basic) - Pre-Board 1',
    grade: '10',
    stream: 'General',
    subject: 'Mathematics (Basic)',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-10',
    uploadedBy: 'Class 10 Faculty',
    downloadsCount: 380,
    viewsCount: 1200,
    tags: ['Basic Level Maths', 'Real Numbers', 'Polynomials'],
    generalInstructions: ['38 questions in total. Basic curriculum paper.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The HCF of 24 and 36 is:',
            subQuestions: ['(a) 6', '(b) 12', '(c) 18', '(d) 24']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (b) 12'
  },
  {
    id: 'paper-10-ai-pb1-2025',
    title: 'Artificial Intelligence (AI) - Pre-Board 1',
    grade: '10',
    stream: 'General',
    subject: 'Artificial Intelligence (AI)',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '2 Hours',
    maxMarks: 50,
    hasAnswerKey: true,
    uploadedAt: '2025-01-14',
    uploadedBy: 'Dept of AI & Technology',
    downloadsCount: 410,
    viewsCount: 1350,
    tags: ['AI Project Cycle', 'Computer Vision', 'NLP', 'Data Science'],
    generalInstructions: ['Skill Subject Code 417. Max Marks: 50.'],
    sections: [
      {
        sectionTitle: 'Section A - Employability Skills & Subject Skills',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Which domain of Artificial Intelligence deals with processing and understanding textual information by machines?',
            subQuestions: ['(a) Computer Vision (CV)', '(b) Natural Language Processing (NLP)', '(c) Data Sciences', '(d) Neural Networks']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (b) Natural Language Processing (NLP).'
  },
  {
    id: 'paper-10-punjabi-pb1-2025',
    title: 'Punjabi - Pre-Board 1',
    grade: '10',
    stream: 'General',
    subject: 'Punjabi',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-12',
    uploadedBy: 'Department of Punjabi',
    downloadsCount: 460,
    viewsCount: 1420,
    tags: ['Punjabi Grammar', 'Literature', 'Sahit Mala', 'Vangi'],
    generalInstructions: ['ਸਾਰੇ ਪ੍ਰਸ਼ਨ ਲਾਜ਼ਮੀ ਹਨ।'],
    sections: [
      {
        sectionTitle: 'ਭਾਗ ੳ - ਪੜ੍ਹਨ ਕੌਸ਼ਲ ਅਤੇ ਵਿਆਕਰਣ',
        instructions: '1 ਅੰਕ ਵਾਲੇ ਪ੍ਰਸ਼ਨ',
        questions: [
          {
            questionNumber: 'ਪ੍ਰਸ਼ਨ 1',
            marks: 1,
            text: 'ਜਿਹੜੇ ਸ਼ਬਦ ਨਾਂਵ ਦੀ ਥਾਂ ਵਰਤੇ ਜਾਣ, ਉਹਨਾਂ ਨੂੰ ਕੀ ਆਖਦੇ ਹਨ?',
            subQuestions: ['(ੳ) ਵਿਸ਼ੇਸ਼ਣ', '(ਅ) ਪੜਨਾਂਵ', '(ੲ) ਕਿਰਿਆ', '(ਸ) ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ']
          }
        ]
      }
    ],
    answerKeyContent: 'ਪ੍ਰਸ਼ਨ 1: (ਅ) ਪੜਨਾਂਵ।'
  },
  {
    id: 'paper-10-sst-pb1-2025',
    title: 'Social Science (SST) - Pre-Board 1',
    grade: '10',
    stream: 'General',
    subject: 'Social Science (SST)',
    examType: 'Pre-Board 1',
    set: 'Standard / Common',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-11',
    uploadedBy: 'Social Studies Faculty',
    downloadsCount: 510,
    viewsCount: 1680,
    tags: ['History', 'Geography', 'Political Science', 'Economics'],
    generalInstructions: ['37 questions in 6 sections.'],
    sections: [
      {
        sectionTitle: 'Section A - 20 MCQs',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Who proclaimed the German Empire in the Hall of Mirrors at Versailles in January 1871?',
            subQuestions: ['(a) Kaiser William I of Prussia', '(b) Otto von Bismarck', '(c) Victor Emmanuel II', '(d) Giuseppe Mazzini']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) Kaiser William I of Prussia.'
  },

  // Class 9
  {
    id: 'paper-9-math-std-pt1-2024',
    title: 'Mathematics (Standard) - PT-1 (Set A)',
    grade: '9',
    stream: 'General',
    subject: 'Mathematics (Standard)',
    examType: 'PT-1',
    set: 'Set A',
    year: 2024,
    session: '2024-2025',
    duration: '1.5 Hours',
    maxMarks: 40,
    hasAnswerKey: true,
    uploadedAt: '2024-05-10',
    uploadedBy: 'Class 9 Teachers',
    downloadsCount: 220,
    viewsCount: 680,
    tags: ['Number Systems', 'Polynomials'],
    generalInstructions: ['Time: 1.5 Hours. Max Marks: 40.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Every rational number is:',
            subQuestions: ['(a) a natural number', '(b) an integer', '(c) a real number', '(d) a whole number']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (c) a real number.'
  },
  {
    id: 'paper-9-ai-pt2-2024',
    title: 'Artificial Intelligence (AI) - PT-2 (Half Yearly)',
    grade: '9',
    stream: 'General',
    subject: 'Artificial Intelligence (AI)',
    examType: 'PT-2 (Half Yearly)',
    set: 'Standard / Common',
    year: 2024,
    session: '2024-2025',
    duration: '2 Hours',
    maxMarks: 50,
    hasAnswerKey: true,
    uploadedAt: '2024-09-21',
    uploadedBy: 'AI Faculty',
    downloadsCount: 290,
    viewsCount: 840,
    tags: ['Introduction to AI', 'AI Ethics', 'Python Basics'],
    generalInstructions: ['Code 417. Time: 2 Hours.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Which of the following is an example of Smart Assistant based on AI?',
            subQuestions: ['(a) Alexa', '(b) Siri', '(c) Google Assistant', '(d) All of the above']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (d) All of the above.'
  },
  {
    id: 'paper-9-marketing-pt4-2024',
    title: 'Marketing - PT-4 (Annual)',
    grade: '9',
    stream: 'General',
    subject: 'Marketing',
    examType: 'PT-4 (Annual)',
    set: 'Standard / Common',
    year: 2024,
    session: '2023-2024',
    duration: '2 Hours',
    maxMarks: 50,
    hasAnswerKey: true,
    uploadedAt: '2024-03-04',
    uploadedBy: 'Vocational Dept',
    downloadsCount: 190,
    viewsCount: 560,
    tags: ['Marketing Mix', 'Consumer Behavior'],
    generalInstructions: ['Max Marks: 50.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: 'Questions',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The 4 Ps of Marketing are Product, Price, Place, and:',
            subQuestions: ['(a) Promotion', '(b) Profit', '(c) People', '(d) Process']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) Promotion.'
  }
];
