import { Question } from '../types/review';

export const segAcademyQuestions: Question[] = [
  {
    id: 'learnedTopics',
    title: 'What did you learn at SEG Academy?',
    subtitle: 'Select the primary concepts or market strategies covered in your training',
    type: 'multi_choice',
    options: [
      'Stock Market Basics',
      'Technical Analysis',
      'Price Action',
      'Options Trading',
      'Options Selling',
      'Forex Trading',
      'Risk Management',
      'Trading Psychology',
      'Smart Money Concepts',
      'Institutional Trading Concepts',
      'Multiple Topics'
    ],
    required: true,
    minSelect: 1,
  },
  {
    id: 'program',
    title: 'Which programme or course did you attend?',
    subtitle: 'Choose the learning track you enrolled in',
    type: 'single_choice',
    options: [
      'Advance Program in Financial Market',
      'Basic Program in Financial Market',
      'Money Matrix Program',
      'Pro Traders Secrets',
      'Option Hedging',
      'Trade with Satya',
      'Workshop / Bootcamp',
      'Other'
    ],
    required: true,
  },
  {
    id: 'practicalLearning',
    title: 'How was the practical learning experience?',
    subtitle: 'Real-time charts, live market analysis, and hands-on execution',
    type: 'single_choice',
    options: [
      'Excellent practical market sessions',
      'Good chart analysis sessions',
      'Helpful live market discussions',
      'More practical exposure needed',
      'Satisfactory'
    ],
    required: true,
  },
  {
    id: 'learningMaterial',
    title: 'How helpful was the learning material?',
    subtitle: 'Presentation notes, strategy PDFs, and reference charts',
    type: 'single_choice',
    options: [
      'Extremely helpful',
      'Very helpful',
      'Good',
      'Average'
    ],
    required: true,
  },
  {
    id: 'likedMost',
    title: 'What did you like the most?',
    subtitle: 'Select the highlight of your learning journey with SEG Academy',
    type: 'multi_choice',
    options: [
      'Teaching methodology',
      'Practical market examples',
      'Trainer\'s knowledge',
      'Doubt-clearing sessions',
      'Trading strategies',
      'Learning environment',
      'Student community'
    ],
    required: true,
    minSelect: 1,
  },
  {
    id: 'overallRating',
    title: 'How was your overall experience?',
    subtitle: 'Your rating helps maintain high educational standards',
    type: 'star_rating',
    maxRating: 5,
    required: true,
  },
  {
    id: 'additionalExperience',
    title: 'Additional experience (Optional)',
    subtitle: 'Feel free to share any specific mentor moment or favorite insight',
    type: 'textarea',
    placeholder: 'e.g., Satya sir explained candlestick patterns and disciplined risk management very patiently...',
    required: false,
  }
];
