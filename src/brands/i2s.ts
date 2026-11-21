import { Question } from '../types/review';

export const i2sBaseQuestions: Question[] = [
  {
    id: 'customerType',
    title: 'What best describes you?',
    subtitle: 'Help us understand your business or project context',
    type: 'single_choice',
    options: [
      'Business Owner',
      'Startup Founder',
      'Marketing Manager',
      'Doctor / Healthcare Professional',
      'Educational Institution',
      'Retail Business Owner',
      'Individual / Personal Brand',
      'Other'
    ],
    required: true,
  },
  {
    id: 'servicesUsed',
    title: 'Which services did you take from I2S?',
    subtitle: 'Select all solutions and services implemented for you',
    type: 'multi_choice',
    options: [
      'Website Development',
      'Software / SaaS Development',
      'Mobile App Development',
      'AI Chatbot',
      'WhatsApp Automation',
      'AI Calling Agent',
      'CRM / Business Automation',
      'SEO / AI SEO',
      'Social Media Management',
      'Digital Marketing',
      'AI Personal Branding',
      'Other'
    ],
    required: true,
    minSelect: 1,
  }
];

export const i2sServiceQuestionsMap: Record<string, Question[]> = {
  'Website Development': [
    {
      id: 'web_design',
      title: 'How was the website design?',
      subtitle: 'Visual aesthetics, modern UI feel, and layout structure',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Website Development',
      required: true,
    },
    {
      id: 'web_mobile',
      title: 'How was the mobile responsiveness?',
      subtitle: 'Smooth viewing experience across phones and tablets',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Website Development',
      required: true,
    },
    {
      id: 'web_speed',
      title: 'How was the website speed?',
      subtitle: 'Load time, image rendering, and responsiveness',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Website Development',
      required: true,
    },
    {
      id: 'web_process',
      title: 'How was the overall development process?',
      subtitle: 'Sprint updates, staging previews, and timely deployment',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Website Development',
      required: true,
    }
  ],
  'Software / SaaS Development': [
    {
      id: 'saas_requirements',
      title: 'How well does the software match your business requirements?',
      subtitle: 'Custom business logic, database structure, and core workflows',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Software / SaaS Development',
      required: true,
    },
    {
      id: 'saas_functionality',
      title: 'How was the functionality?',
      subtitle: 'Feature stability, permissions, reporting, and execution',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Software / SaaS Development',
      required: true,
    },
    {
      id: 'saas_tech_understanding',
      title: "How was the development team's technical understanding?",
      subtitle: 'Architecture expertise, API integration, and problem solving',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Software / SaaS Development',
      required: true,
    },
    {
      id: 'saas_delivery',
      title: 'How was the overall delivery experience?',
      subtitle: 'Milestones adherence, QA testing, and software rollout',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Software / SaaS Development',
      required: true,
    }
  ],
  'AI Chatbot': [
    {
      id: 'chatbot_utility',
      title: 'How useful is the automation for your business?',
      subtitle: 'Lead qualification, instant response time, and 24/7 availability',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Chatbot',
      required: true,
    },
    {
      id: 'chatbot_flow',
      title: 'How was the conversation flow?',
      subtitle: 'Natural dialogue, accurate answers, and intent routing',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Chatbot',
      required: true,
    },
    {
      id: 'chatbot_ease',
      title: 'How easy is it to use?',
      subtitle: 'Administration dashboard and visitor user interface',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Chatbot',
      required: true,
    },
    {
      id: 'chatbot_queries',
      title: 'How well does it handle customer queries?',
      subtitle: 'Handling edge cases and providing helpful business information',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Chatbot',
      required: true,
    }
  ],
  'WhatsApp Automation': [
    {
      id: 'wa_utility',
      title: 'How useful is the WhatsApp automation for your business?',
      subtitle: 'Broadcasts, interactive buttons, and auto-reply sequences',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'WhatsApp Automation',
      required: true,
    },
    {
      id: 'wa_flow',
      title: 'How was the conversation flow?',
      subtitle: 'Menu navigation, message formatting, and trigger delivery',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'WhatsApp Automation',
      required: true,
    },
    {
      id: 'wa_ease',
      title: 'How easy is it to manage?',
      subtitle: 'Simplicity of updating templates and reviewing customer chats',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'WhatsApp Automation',
      required: true,
    },
    {
      id: 'wa_queries',
      title: 'How well does it handle customer queries?',
      subtitle: 'Customer engagement and rapid communication turnaround',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'WhatsApp Automation',
      required: true,
    }
  ],
  'SEO / AI SEO': [
    {
      id: 'seo_strategy',
      title: 'How was the SEO strategy?',
      subtitle: 'On-page structure, technical crawlability, and schema design',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'SEO / AI SEO',
      required: true,
    },
    {
      id: 'seo_keywords',
      title: 'How was the keyword research?',
      subtitle: 'Targeting commercial intent and relevant local keywords',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'SEO / AI SEO',
      required: true,
    },
    {
      id: 'seo_reporting',
      title: 'How was the reporting and communication?',
      subtitle: 'Clarity of index status, ranking tracking, and team updates',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'SEO / AI SEO',
      required: true,
    },
    {
      id: 'seo_management',
      title: 'How was the overall SEO management?',
      subtitle: 'Professional execution and structured optimization roadmap',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'SEO / AI SEO',
      required: true,
    }
  ],
  'Social Media Management': [
    {
      id: 'smm_content',
      title: 'How was the content quality?',
      subtitle: 'Caption copy, brand messaging, and storytelling',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Social Media Management',
      required: true,
    },
    {
      id: 'smm_creative',
      title: 'How was the creative design?',
      subtitle: 'Post creatives, video reels, and aesthetic presentation',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Social Media Management',
      required: true,
    },
    {
      id: 'smm_consistency',
      title: 'How was the posting consistency?',
      subtitle: 'Adherence to editorial calendar and timely publications',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Social Media Management',
      required: true,
    },
    {
      id: 'smm_planning',
      title: 'How was the communication and planning?',
      subtitle: 'Monthly content review and creative alignment',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Social Media Management',
      required: true,
    }
  ],
  'AI Calling Agent': [
    {
      id: 'voice_interaction',
      title: 'How natural was the AI voice interaction?',
      subtitle: 'Conversational tone, speech synthesis, and latency',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Calling Agent',
      required: true,
    },
    {
      id: 'voice_workflow',
      title: 'How was the calling workflow?',
      subtitle: 'Appointment booking, follow-up calls, and data sync',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Calling Agent',
      required: true,
    },
    {
      id: 'voice_handling',
      title: 'How well did the agent handle conversations?',
      subtitle: 'Understanding customer replies and intent classification',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Calling Agent',
      required: true,
    },
    {
      id: 'voice_automation',
      title: 'How was the overall automation experience?',
      subtitle: 'Reliability and efficiency for outbound/inbound calls',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Calling Agent',
      required: true,
    }
  ],
  'Mobile App Development': [
    {
      id: 'app_ui',
      title: "How was the app's user interface?",
      subtitle: 'Visual layout, animations, and intuitive navigation',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Mobile App Development',
      required: true,
    },
    {
      id: 'app_functionality',
      title: 'How was the functionality?',
      subtitle: 'Feature completeness, native integrations, and offline support',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Mobile App Development',
      required: true,
    },
    {
      id: 'app_performance',
      title: 'How was the performance?',
      subtitle: 'Smoothness, app responsiveness, and crash-free experience',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Mobile App Development',
      required: true,
    },
    {
      id: 'app_communication',
      title: 'How was the development communication?',
      subtitle: 'TestFlight / APK testing rounds and sprint demos',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'Mobile App Development',
      required: true,
    }
  ],
  'AI Personal Branding': [
    {
      id: 'branding_strategy',
      title: 'How was the content strategy?',
      subtitle: 'Niche positioning, thought leadership, and audience hook',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Personal Branding',
      required: true,
    },
    {
      id: 'branding_positioning',
      title: 'How was the brand positioning?',
      subtitle: 'Clarity of your personal brand voice and professional stature',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Personal Branding',
      required: true,
    },
    {
      id: 'branding_quality',
      title: 'How was the content quality?',
      subtitle: 'High-impact visuals, storytelling copy, and reel scripts',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Personal Branding',
      required: true,
    },
    {
      id: 'branding_experience',
      title: 'How was the overall experience?',
      subtitle: 'Collaboration with the I2S personal branding strategists',
      type: 'single_choice',
      options: ['Excellent', 'Very Good', 'Good', 'Average'],
      serviceKey: 'AI Personal Branding',
      required: true,
    }
  ]
};

export const i2sClosingQuestions: Question[] = [
  {
    id: 'teamCommunication',
    title: "How was the I2S team's communication?",
    subtitle: 'Responsiveness, meeting coordination, and project updates',
    type: 'single_choice',
    options: [
      'Excellent communication',
      'Quick responses',
      'Professional approach',
      'Good coordination',
      'Needs improvement'
    ],
    required: true,
  },
  {
    id: 'requirementsUnderstanding',
    title: "How was the team's understanding of your requirements?",
    subtitle: 'Translating your vision into technical and creative execution',
    type: 'single_choice',
    options: [
      'Understood everything clearly',
      'Understood most requirements',
      'Helped refine my ideas',
      'Needed additional clarification'
    ],
    required: true,
  },
  {
    id: 'teamSupport',
    title: "How would you rate the team's support?",
    subtitle: 'Post-delivery assistance, bug fixes, and maintenance availability',
    type: 'star_rating',
    maxRating: 5,
    required: true,
  },
  {
    id: 'overallRating',
    title: 'How was your overall experience working with I2S?',
    subtitle: 'Rate your overall satisfaction as a client or partner',
    type: 'star_rating',
    maxRating: 5,
    required: true,
  },
  {
    id: 'workAgain',
    title: 'Would you consider working with I2S again?',
    subtitle: 'For future digital expansions, new modules, or brand scaling',
    type: 'single_choice',
    options: [
      'Definitely',
      'Most likely',
      'Maybe',
      'Not sure'
    ],
    required: true,
  },
  {
    id: 'additionalFeedback',
    title: 'Additional feedback (Optional)',
    subtitle: 'Share any specific milestone or appreciation for team members',
    type: 'textarea',
    placeholder: 'e.g., The team delivered our custom platform with high quality and provided quick technical support whenever needed...',
    required: false,
  }
];

export function getI2SActiveQuestions(answers: Record<string, any>): Question[] {
  const selectedServices: string[] = Array.isArray(answers.servicesUsed) ? answers.servicesUsed : [];
  
  // Combine base questions
  const questions: Question[] = [...i2sBaseQuestions];

  // Insert dynamic questions for each selected service
  // Keep the experience focused - if many services selected, we pick the most critical dynamic questions
  selectedServices.forEach(service => {
    if (i2sServiceQuestionsMap[service]) {
      questions.push(...i2sServiceQuestionsMap[service]);
    }
  });

  // Append closing questions
  questions.push(...i2sClosingQuestions);

  return questions;
}
