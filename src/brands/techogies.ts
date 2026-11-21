import { Question } from '../types/review';

export const techogiesQuestions: Question[] = [
  {
    id: 'course',
    title: 'Which course did you join?',
    subtitle: 'Select your technology track or specialization',
    type: 'single_choice',
    options: [
      'Full Stack Development',
      'Web Development',
      'Cybersecurity',
      'Ethical Hacking',
      'Python Programming',
      'Data Analytics',
      'Power BI',
      'Digital Marketing with AI',
      'Other'
    ],
    required: true,
  },
  {
    id: 'learningMode',
    title: 'What was your learning mode?',
    subtitle: 'Format of your classes and labs',
    type: 'single_choice',
    options: [
      'Classroom Training',
      'Online Training',
      'Hybrid Learning',
      'Workshop / Seminar'
    ],
    required: true,
  },
  {
    id: 'trainerTechnicalKnowledge',
    title: "How was the trainer's technical knowledge?",
    subtitle: 'Industry expertise, code debugging assistance, and conceptual depth',
    type: 'single_choice',
    options: [
      'Excellent',
      'Very Good',
      'Good',
      'Average'
    ],
    required: true,
  },
  {
    id: 'practicalClasses',
    title: 'How practical were the classes?',
    subtitle: 'Hands-on coding, live lab setups, and project building',
    type: 'single_choice',
    options: [
      'Real-world projects and assignments',
      'Hands-on practical sessions',
      'Mostly theoretical',
      'Balanced theory and practical learning'
    ],
    required: true,
  },
  {
    id: 'likedMost',
    title: 'What did you like most?',
    subtitle: 'Select the highlights of your technical training',
    type: 'multi_choice',
    options: [
      'Teaching methodology',
      'Practical assignments',
      'Live projects',
      'Doubt-clearing sessions',
      'AI tools exposure',
      'Learning environment',
      'Trainer support'
    ],
    required: true,
    minSelect: 1,
  },
  {
    id: 'courseMaterial',
    title: 'How was the course material?',
    subtitle: 'Git repos, project templates, assignments, and reference guides',
    type: 'single_choice',
    options: [
      'Very helpful',
      'Well structured',
      'Good',
      'Needs improvement'
    ],
    required: true,
  },
  {
    id: 'overallRating',
    title: 'How would you rate your overall experience?',
    subtitle: 'Rate your total satisfaction with the training curriculum and mentor',
    type: 'star_rating',
    maxRating: 5,
    required: true,
  },
  {
    id: 'additionalFeedback',
    title: 'Additional feedback (Optional)',
    subtitle: 'Share any project you built or note about your tech journey',
    type: 'textarea',
    placeholder: 'e.g., Building full-stack web applications with React and Node.js helped me build real portfolio projects...',
    required: false,
  }
];
