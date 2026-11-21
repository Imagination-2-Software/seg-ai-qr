import { Question } from '../types/review';

export const careerDharaQuestions: Question[] = [
  {
    id: 'service',
    title: 'What service did you receive?',
    subtitle: 'Select the counselling or admission stream discussed',
    type: 'single_choice',
    options: [
      'B.Tech Admission Guidance',
      'MBA Admission Guidance',
      'PGDM Counselling',
      'BBA / BCA Guidance',
      'MCA / M.Tech Guidance',
      'MBBS Admission Guidance',
      'College Selection',
      'General Career Counselling',
      'Other'
    ],
    required: true,
  },
  {
    id: 'recipient',
    title: 'Who received the counselling?',
    subtitle: 'Who was the primary beneficiary of the career session?',
    type: 'single_choice',
    options: [
      'Myself',
      'My Son / Daughter',
      'Brother / Sister',
      'Friend',
      'Other'
    ],
    required: true,
  },
  {
    id: 'sessionHelpfulness',
    title: 'How helpful was the counselling session?',
    subtitle: 'Did it provide clear direction and clarity on course and university pathways?',
    type: 'single_choice',
    options: [
      'Extremely helpful',
      'Very helpful',
      'Helpful',
      'Average'
    ],
    required: true,
  },
  {
    id: 'requirementUnderstanding',
    title: 'How well did the counsellor understand your requirements?',
    subtitle: 'Regarding academic background, budget, preferred locations, and career goals',
    type: 'single_choice',
    options: [
      'Completely understood my requirements',
      'Provided personalized guidance',
      'Explained available options clearly',
      'Could have provided more information'
    ],
    required: true,
  },
  {
    id: 'collegeSelectionGuidance',
    title: 'How was the college selection guidance?',
    subtitle: 'Shortlisting of colleges, cutoff comparisons, and placement track record review',
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
    id: 'communicationSupport',
    title: 'How was the communication and support?',
    subtitle: 'Timeliness of follow-ups, responsiveness, and friendly demeanor',
    type: 'single_choice',
    options: [
      'Very responsive',
      'Friendly and supportive',
      'Professional communication',
      'Satisfactory'
    ],
    required: true,
  },
  {
    id: 'overallRating',
    title: 'Overall experience?',
    subtitle: 'Your rating helps other students make informed career decisions',
    type: 'star_rating',
    maxRating: 5,
    required: true,
  },
  {
    id: 'additionalFeedback',
    title: 'Additional feedback (Optional)',
    subtitle: 'Mention any counsellor by name or share your key takeaway',
    type: 'textarea',
    placeholder: 'e.g., The team gave clear insights into top colleges and cleared all my doubts regarding branches...',
    required: false,
  }
];
