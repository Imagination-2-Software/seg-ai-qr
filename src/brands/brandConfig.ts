import { BrandId, BrandInfo } from '../types/brand';
import { Question } from '../types/review';
import { segAcademyQuestions } from './segAcademy';
import { careerDharaQuestions } from './careerDhara';
import { techogiesQuestions } from './techogies';
import { shoraiQuestions } from './shorai';
import { getI2SActiveQuestions, i2sBaseQuestions } from './i2s';

export const BRANDS_CONFIG: Record<BrandId, BrandInfo> = {
  'seg-academy': {
    id: 'seg-academy',
    title: 'SEG Academy',
    parentBrand: 'SEG Academy',
    tagline: 'Learn. Trade. Grow.',
    description: 'Premier financial market education, technical analysis, price action, options trading, and institutional risk management.',
    category: 'Financial Education',
    categoryLabel: 'Stock Market & Financial Education',
    websiteUrl: 'https://www.segacademy.in/',
    googleReviewUrl: 'https://www.google.com/search?kgmid=/g/11s32t4dfl&hl=en-IN&q=SEG+Academy+-+Premier+Stock+Market+Training+Institute+(Best+Stock+Market+Course+in+Varanasi)#lrd=0x398e2d95d4165209:0x3d47a5e16206bbe1,3',
    googlePlaceId: 'ChIJCQlSFtSVLY45EeG7BmLhpUc9',
    googleFid: '0x398e2d95d4165209:0x3d47a5e16206bbe1',
    isConfiguredGoogleUrl: true,
    logo: '/SEGAcademy Training Workshop Logo.png',
    markLogo: '/brands/seg-mark.png',
    iconName: 'TrendingUp',
    colorTheme: {
      primary: '#0A192F',
      secondary: '#0F2942',
      accent: '#10B981', // Financial green
      accentLight: '#ECFDF5',
      badgeBg: '#DCFCE7',
      badgeText: '#15803D',
      cardBg: '#FFFFFF',
      cardBorder: '#E2E8F0',
      cardHoverBorder: '#10B981',
      isDarkTheme: false,
    },
    visualTags: ['Stock Charts', 'Price Action', 'Options', 'Forex', 'Trading Psychology'],
    visualHighlights: 'Candlestick patterns, order flow dynamics, and live market chart analysis.',
    headline: 'How Was Your Learning Experience at SEG Academy?',
    subheading: 'Share your feedback on our financial market programs and practical market sessions.'
  },
  'career-dhara': {
    id: 'career-dhara',
    title: 'Career Dhara',
    parentBrand: 'SEG Academy',
    tagline: 'Your Career, Our Guidance.',
    description: 'Expert career counselling, personalized college selection, and trusted admission guidance across engineering, management, and medical degrees.',
    category: 'Career Counselling & Admissions',
    categoryLabel: 'Career Guidance & College Admissions',
    websiteUrl: 'https://careerdhara.com/',
    googleReviewUrl: 'https://www.google.com/search?kgmid=/g/11yxzp4f40&hl=en-IN&q=CareerDhara#lrd=0x398e2d11e157ad5d:0x87fb7b159014fa35,3',
    googlePlaceId: 'ChIJCV2tV-ERLY45ETX6FJAVe_uH',
    googleFid: '0x398e2d11e157ad5d:0x87fb7b159014fa35',
    isConfiguredGoogleUrl: true,
    logo: '/brands/careerdhara-logo.png',
    markLogo: '/brands/careerdhara-fevicon.png',
    iconName: 'GraduationCap',
    colorTheme: {
      primary: '#1E3A8A', // Royal blue
      secondary: '#1D4ED8',
      accent: '#F97316', // Subtle orange
      accentLight: '#FFF7ED',
      badgeBg: '#FFEDD5',
      badgeText: '#C2410C',
      cardBg: '#FFFFFF',
      cardBorder: '#E2E8F0',
      cardHoverBorder: '#2563EB',
      isDarkTheme: false,
    },
    visualTags: ['B.Tech Admissions', 'MBA / PGDM', 'MBBS Guidance', 'College Selection', 'Career Mapping'],
    visualHighlights: 'Personalized mentoring, transparent cut-off counseling, and student-first pathways.',
    headline: 'How Was Your Career Guidance Experience?',
    subheading: 'Tell us how our counsellors helped guide your academic journey and university choices.'
  },
  'techogies': {
    id: 'techogies',
    title: 'Techogies',
    parentBrand: 'SEG Academy',
    tagline: 'Learn Technology. Build Your Future.',
    description: 'Industry-oriented IT training in Full Stack Development, Cybersecurity, Python, and Data Analytics with hands-on live projects.',
    category: 'IT Education & Technical Training',
    categoryLabel: 'Software Engineering & IT Education',
    websiteUrl: 'https://techogies.com/',
    googleReviewUrl: 'https://www.google.com/search?kgmid=/g/11wfcf68r5&hl=en-IN&q=Techogies#lrd=0x398e2d1179d9d443:0x9a2c4809717983d1,3',
    googlePlaceId: 'ChIJCUPU2XkRLY45EdGDeXEJSCya',
    googleFid: '0x398e2d1179d9d443:0x9a2c4809717983d1',
    isConfiguredGoogleUrl: true,
    logo: '/brands/techogies-logo.png',
    markLogo: '/brands/techogies-favicon.png',
    iconName: 'Code2',
    colorTheme: {
      primary: '#0F172A', // Dark charcoal
      secondary: '#1E293B',
      accent: '#06B6D4', // Electric cyan/blue
      accentLight: '#ECFEFF',
      badgeBg: '#EDE9FE',
      badgeText: '#6D28D9',
      cardBg: '#0F172A',
      cardBorder: '#334155',
      cardHoverBorder: '#06B6D4',
      isDarkTheme: true,
    },
    visualTags: ['Full Stack', 'Cybersecurity', 'Python AI', 'Data Analytics', 'Live Projects'],
    visualHighlights: 'Interactive code reviews, modern developer workstations, and production deployments.',
    headline: 'How Was Your Learning Experience at Techogies?',
    subheading: 'Rate your coding journey, mentorship quality, and practical software assignments.'
  },
  'shorai': {
    id: 'shorai',
    title: 'SHORAI',
    parentBrand: 'SEG Academy',
    tagline: 'Building Future Innovators.',
    description: 'Pioneering robotics education, autonomous drone tech, AI curriculums, and school STEM innovation lab infrastructure.',
    category: 'AI, Robotics & STEM Education',
    categoryLabel: 'Robotics, Drones & STEM Innovation',
    websiteUrl: 'https://www.shorai.in/',
    googleReviewUrl: 'https://www.google.com/search?kgmid=/g/11p1f339q5&hl=en-IN&q=SHORAI+by+SEG+Academy+%7C+AI+Robotics+%26+Drone+Labs#lrd=0x398e2d6d237509b7:0xf4c7ac189a75b30f,3',
    googlePlaceId: 'ChIJCbcJdSNtLY45EQ-zdZoYrMf0',
    googleFid: '0x398e2d6d237509b7:0xf4c7ac189a75b30f',
    isConfiguredGoogleUrl: true,
    logo: '/brands/shorai-logo.png',
    markLogo: '/brands/shorai.png',
    iconName: 'Bot',
    colorTheme: {
      primary: '#0369A1',
      secondary: '#0284C7',
      accent: '#0EA5E9', // Futuristic cyan blue
      accentLight: '#F0F9FF',
      badgeBg: '#E0F2FE',
      badgeText: '#0369A1',
      cardBg: '#FFFFFF',
      cardBorder: '#E2E8F0',
      cardHoverBorder: '#0284C7',
      isDarkTheme: false,
    },
    visualTags: ['Robotics Labs', 'Autonomous Drones', 'School STEM Labs', 'AI Curriculum', 'Hardware Kits'],
    visualHighlights: 'Hands-on microcontrollers, sensor experiments, and institutional STEM lab setups.',
    headline: 'How Was Your Experience With SHORAI?',
    subheading: 'Share your perspective on our STEM robotics programs, workshops, and lab experiences.'
  },
  'i2s': {
    id: 'i2s',
    title: 'I2S – Imagination to Software',
    parentBrand: 'SEG Academy',
    tagline: 'Build. Automate. Scale.',
    description: 'End-to-end custom software development, AI chatbots, WhatsApp business automation, SEO, and full-funnel digital marketing.',
    category: 'AI, Software & Digital Growth',
    categoryLabel: 'Custom Software, AI Automation & Growth Agency',
    websiteUrl: 'https://thei2s.com/',
    googleReviewUrl: 'https://www.google.com/search?kgmid=/g/11jgyhnnnp&hl=en-IN&q=IMAGINATION2SOFTWARE#lrd=0x398e2ffbd72b9afd:0xf6fd8d19fbc4929a,3',
    googlePlaceId: 'ChIJCf2aK9f7L445EZqSxPsZjf32',
    googleFid: '0x398e2ffbd72b9afd:0xf6fd8d19fbc4929a',
    isConfiguredGoogleUrl: true,
    logo: '/brands/i2s-logo.png',
    markLogo: '/brands/i2s-logo.jpeg',
    iconName: 'BrainCircuit',
    colorTheme: {
      primary: '#141414', // Deep charcoal
      secondary: '#1F1F1F',
      accent: '#FF5500', // Vivid Orange
      accentLight: '#FFF1EB',
      badgeBg: '#FFEDD5',
      badgeText: '#EA580C',
      cardBg: '#141414',
      cardBorder: '#27272A',
      cardHoverBorder: '#FF5500',
      isDarkTheme: true,
    },
    visualTags: ['SaaS Platforms', 'AI Chatbots', 'WhatsApp Automation', 'SEO & Digital Marketing', 'Web Apps'],
    visualHighlights: 'High-performing web platforms, scalable cloud architectures, and conversion-focused AI agents.',
    headline: 'How Was Your Experience Working With I2S?',
    subheading: 'Your feedback helps us build better digital experiences.'
  }
};

export const BRAND_LIST: BrandInfo[] = Object.values(BRANDS_CONFIG);

export function getBrandQuestions(brandId: BrandId, currentAnswers: Record<string, any> = {}): Question[] {
  switch (brandId) {
    case 'seg-academy':
      return segAcademyQuestions;
    case 'career-dhara':
      return careerDharaQuestions;
    case 'techogies':
      return techogiesQuestions;
    case 'shorai':
      return shoraiQuestions;
    case 'i2s':
      return getI2SActiveQuestions(currentAnswers);
    default:
      return [];
  }
}
