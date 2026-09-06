import { Paper } from '@/types/paper';

export const INITIAL_PAPERS: Paper[] = [
  // Class 12
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
    generalInstructions: [
      'This question paper contains 38 questions in 5 Sections A-E.',
      'All questions are compulsory.'
    ],
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
      },
      {
        sectionTitle: 'SECTION B - Short Answers',
        instructions: '2 Marks each',
        questions: [
          {
            questionNumber: 'Q3',
            marks: 2,
            text: 'Find the points on the curve y = x³ - 3x² - 9x + 7 at which the tangent is parallel to the x-axis.'
          }
        ]
      }
    ],
    answerKeyContent: 'Solutions (Set A):\nQ1: |adj(A)| = |A|² = 64 => |A| = ±8 (Option a).\nQ2: eˣ/x + C.\nQ3: Points are (3, -20) and (-1, 12).'
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
    tags: ['Calculus', 'Vectors', '3D Geometry', 'Matrices'],
    description: 'Pre-Board 1 Mathematics paper (Set B) for Class 12.',
    generalInstructions: [
      'This question paper contains 38 questions in 5 Sections A-E.',
      'All questions are compulsory.'
    ],
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
          },
          {
            questionNumber: 'Q2',
            marks: 1,
            text: 'Evaluate: ∫ sin(2x) / (1 + cos²x) dx'
          }
        ]
      }
    ],
    answerKeyContent: 'Solutions (Set B):\nQ1: |adj(2A)| = |2A|² = (2³·|A|)² = (8·4)² = 32² = 1024 (Option c).\nQ2: -ln(1 + cos²x) + C.'
  },
  {
    id: 'paper-12-math-hy-2024',
    title: 'Mathematics - PT-2 (Half Yearly)',
    grade: '12',
    stream: 'Science',
    subject: 'Mathematics',
    examType: 'PT-2 (Half Yearly)',
    set: 'Standard / Common',
    year: 2024,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2024-09-22',
    uploadedBy: 'Mathematics Faculty',
    downloadsCount: 290,
    viewsCount: 890,
    tags: ['Calculus', 'Relations & Functions', 'Matrices'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A - 1 Mark each',
        instructions: 'Objective questions',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Let R be a relation on set A = {1, 2, 3} given by R = {(1, 1), (2, 2), (3, 3), (1, 2)}. Check if R is reflexive and symmetric.'
          }
        ]
      }
    ],
    answerKeyContent: 'R is reflexive since (a,a) ∈ R for all a ∈ A. R is not symmetric since (1,2) ∈ R but (2,1) ∉ R.'
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
    id: 'paper-12-phys-pb2-setB-2025',
    title: 'Physics - Pre-Board 2 (Set B)',
    grade: '12',
    stream: 'Science',
    subject: 'Physics',
    examType: 'Pre-Board 2',
    set: 'Set B',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2025-01-20',
    uploadedBy: 'Department of Physics',
    downloadsCount: 275,
    viewsCount: 920,
    tags: ['Electrostatics', 'Magnetism', 'Wave Optics'],
    generalInstructions: ['35 questions in all. All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A - MCQs',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The ratio of speed of light in vacuum to speed in medium of refractive index 1.5 is:',
            subQuestions: ['(a) 1.5', '(b) 0.67', '(c) 1.0', '(d) 2.25']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) 1.5 (v = c/μ => c/v = μ = 1.5).'
  },

  // Class 11
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
    id: 'paper-11-math-pt1-setB-2024',
    title: 'Mathematics - PT-1 (Set B)',
    grade: '11',
    stream: 'Science',
    subject: 'Mathematics',
    examType: 'PT-1',
    set: 'Set B',
    year: 2024,
    session: '2024-2025',
    duration: '1.5 Hours',
    maxMarks: 40,
    hasAnswerKey: true,
    uploadedAt: '2024-05-18',
    uploadedBy: 'Dept of Mathematics',
    downloadsCount: 170,
    viewsCount: 490,
    tags: ['Sets', 'Functions', 'Trigonometry'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Find the domain and range of the real function f(x) = √(9 - x²).'
          }
        ]
      }
    ],
    answerKeyContent: 'Domain: [-3, 3], Range: [0, 3].'
  },
  {
    id: 'paper-11-math-hy-2024',
    title: 'Mathematics - PT-2 (Half Yearly)',
    grade: '11',
    stream: 'Science',
    subject: 'Mathematics',
    examType: 'PT-2 (Half Yearly)',
    set: 'Standard / Common',
    year: 2024,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2024-09-25',
    uploadedBy: 'Dept of Mathematics',
    downloadsCount: 310,
    viewsCount: 940,
    tags: ['Trigonometry', 'Complex Numbers', 'Permutations'],
    generalInstructions: ['38 questions in total.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Find the value of sin(75°).'
          }
        ]
      }
    ],
    answerKeyContent: 'sin(75°) = (√6 + √2)/4.'
  },
  {
    id: 'paper-11-phys-annual-2024',
    title: 'Physics - PT-4 (Annual)',
    grade: '11',
    stream: 'Science',
    subject: 'Physics',
    examType: 'PT-4 (Annual)',
    set: 'Set A',
    year: 2024,
    session: '2023-2024',
    duration: '3 Hours',
    maxMarks: 70,
    hasAnswerKey: true,
    uploadedAt: '2024-03-01',
    uploadedBy: 'Physics Dept',
    downloadsCount: 380,
    viewsCount: 1200,
    tags: ['Mechanics', 'Thermodynamics', 'Waves'],
    generalInstructions: ['All questions are compulsory.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The dimensional formula of Universal Gravitational Constant G is:',
            subQuestions: ['(a) [M⁻¹ L³ T⁻²]', '(b) [M¹ L² T⁻¹]', '(c) [M² L⁻¹ T⁻²]', '(d) [M⁻² L² T⁻¹]']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) [M⁻¹ L³ T⁻²]'
  },

  // Class 10
  {
    id: 'paper-10-math-pb1-setA-2025',
    title: 'Mathematics - Pre-Board 1 (Set A)',
    grade: '10',
    stream: 'General',
    subject: 'Mathematics',
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
    generalInstructions: ['38 questions in total. No calculators allowed.'],
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
    id: 'paper-10-math-pb1-setB-2025',
    title: 'Mathematics - Pre-Board 1 (Set B)',
    grade: '10',
    stream: 'General',
    subject: 'Mathematics',
    examType: 'Pre-Board 1',
    set: 'Set B',
    year: 2025,
    session: '2024-2025',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2025-01-10',
    uploadedBy: 'Class 10 Faculty',
    downloadsCount: 490,
    viewsCount: 1610,
    tags: ['Trigonometry', 'Quadratic Equations', 'Circles'],
    generalInstructions: ['38 questions in total. No calculators allowed.'],
    sections: [
      {
        sectionTitle: 'Section A - 20 MCQs',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'If LCM(a, 18) = 36 and HCF(a, 18) = 2, then value of a is:',
            subQuestions: ['(a) 2', '(b) 3', '(c) 4', '(d) 1']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (c) 4 (a = 36*2/18 = 4).'
  },

  // Class 9
  {
    id: 'paper-9-math-pt1-setA-2024',
    title: 'Mathematics - PT-1 (Set A)',
    grade: '9',
    stream: 'General',
    subject: 'Mathematics',
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
    id: 'paper-9-math-pt1-setB-2024',
    title: 'Mathematics - PT-1 (Set B)',
    grade: '9',
    stream: 'General',
    subject: 'Mathematics',
    examType: 'PT-1',
    set: 'Set B',
    year: 2024,
    session: '2024-2025',
    duration: '1.5 Hours',
    maxMarks: 40,
    hasAnswerKey: true,
    uploadedAt: '2024-05-10',
    uploadedBy: 'Class 9 Teachers',
    downloadsCount: 205,
    viewsCount: 640,
    tags: ['Number Systems', 'Coordinate Geometry'],
    generalInstructions: ['Time: 1.5 Hours. Max Marks: 40.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'The value of (256)^(0.16) × (256)^(0.09) is:',
            subQuestions: ['(a) 4', '(b) 16', '(c) 64', '(d) 256.25']
          }
        ]
      }
    ],
    answerKeyContent: 'Q1: (a) 4 (256^(0.25) = (4^4)^(1/4) = 4).'
  },
  {
    id: 'paper-9-math-annual-2024',
    title: 'Mathematics - PT-4 (Annual)',
    grade: '9',
    stream: 'General',
    subject: 'Mathematics',
    examType: 'PT-4 (Annual)',
    set: 'Standard / Common',
    year: 2024,
    session: '2023-2024',
    duration: '3 Hours',
    maxMarks: 80,
    hasAnswerKey: true,
    uploadedAt: '2024-03-05',
    uploadedBy: 'School Library Staff',
    downloadsCount: 310,
    viewsCount: 1100,
    tags: ['Full Syllabus', 'Mensuration', 'Statistics'],
    generalInstructions: ['38 questions across 5 sections.'],
    sections: [
      {
        sectionTitle: 'Section A',
        instructions: '1 Mark each',
        questions: [
          {
            questionNumber: 'Q1',
            marks: 1,
            text: 'Find the area of a triangle whose sides are 13 cm, 14 cm and 15 cm using Heron’s formula.'
          }
        ]
      }
    ],
    answerKeyContent: 's = 21 cm. Area = √(21·8·7·6) = 84 cm².'
  }
];
