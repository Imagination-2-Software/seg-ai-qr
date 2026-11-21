import { Question } from '../types/review';

export const shoraiQuestions: Question[] = [
  {
    id: 'service',
    title: 'What type of SHORAI service did you experience?',
    subtitle: 'Select the STEM or innovation program you interacted with',
    type: 'single_choice',
    options: [
      'Robotics Education',
      'AI Education',
      'STEM Innovation Lab',
      'Drone Technology',
      'School Lab Setup',
      'Institutional Partnership',
      'Student Workshop',
      'Other'
    ],
    required: true,
  },
  {
    id: 'userRole',
    title: 'Who are you?',
    subtitle: 'Your perspective helps tailor our educational and institutional initiatives',
    type: 'single_choice',
    options: [
      'Student',
      'Parent',
      'School Principal',
      'Teacher',
      'School Administrator',
      'Institutional Representative'
    ],
    required: true,
  },
  {
    id: 'practicalLearning',
    title: 'How was the practical learning experience?',
    subtitle: 'Robotics kits, hardware assembly, coding drones, and sensor experiments',
    type: 'single_choice',
    options: [
      'Excellent hands-on learning',
      'Very interactive',
      'Good demonstrations',
      'Satisfactory'
    ],
    required: true,
  },
  {
    id: 'trainerQuality',
    title: 'How would you rate the quality of trainers?',
    subtitle: 'Technical mastery, pedagogical patience, and innovation guidance',
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
    id: 'infrastructure',
    title: 'How was the infrastructure and equipment?',
    subtitle: 'Robotics microcontrollers, drone modules, 3D printing, and testing facilities',
    type: 'single_choice',
    options: [
      'Excellent',
      'Very Good',
      'Good',
      'Average',
      'Not Applicable'
    ],
    required: true,
  },
  {
    id: 'impressedMost',
    title: 'What impressed you the most?',
    subtitle: 'Select the most compelling element of the SHORAI ecosystem',
    type: 'multi_choice',
    options: [
      'Robotics activities',
      'AI learning',
      'Drone technology',
      'Practical experiments',
      'Innovation lab setup',
      'Trainer support',
      'Curriculum'
    ],
    required: true,
    minSelect: 1,
  },
  {
    id: 'overallRating',
    title: 'Overall experience?',
    subtitle: 'Rate your satisfaction with SHORAI’s STEM & robotics mission',
    type: 'star_rating',
    maxRating: 5,
    required: true,
  },
  {
    id: 'additionalFeedback',
    title: 'Additional feedback (Optional)',
    subtitle: 'Share your vision for STEM education or project accomplishments',
    type: 'textarea',
    placeholder: 'e.g., The hands-on robotics lab and live drone demonstrations gave our students immense curiosity...',
    required: false,
  }
];
