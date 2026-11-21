import { BrandId } from '../types/brand';
import { FeedbackSubmission } from '../types/review';

const DRAFT_PREFIX = 'seg_review_draft_';
const SUBMISSIONS_KEY = 'seg_review_submissions';

// Initial realistic mock submissions for the analytics dashboard
const INITIAL_MOCK_SUBMISSIONS: FeedbackSubmission[] = [
  {
    id: 'sub-001',
    brandId: 'seg-academy',
    brandName: 'SEG Academy',
    customerRole: 'Student',
    rating: 5,
    answers: {
      learnedTopics: ['Technical Analysis', 'Price Action'],
      program: 'Advance Program in Financial Market',
      trainerRating: 5,
      practicalLearning: 'Excellent practical market sessions',
      likedMost: ['Teaching methodology', 'Doubt-clearing sessions'],
    },
    reviewText: 'I had a really rewarding learning experience at SEG Academy. Attending the Advance Program in Financial Market gave me in-depth clarity on Technical Analysis and Price Action.',
    language: 'en',
    createdAt: '2026-11-21T10:15:00Z',
    isCopied: true,
    isGoogleClicked: true,
  },
  {
    id: 'sub-002',
    brandId: 'i2s',
    brandName: 'I2S – Imagination to Software',
    customerRole: 'Startup Founder',
    rating: 5,
    answers: {
      customerType: 'Startup Founder',
      servicesUsed: ['Website Development', 'WhatsApp Automation'],
      teamCommunication: 'Quick responses',
      requirementsUnderstanding: 'Understood everything clearly',
      teamSupport: 5,
      overallRating: 5,
      workAgain: 'Definitely',
    },
    reviewText: 'Working with I2S for our Website Development and WhatsApp Automation has been a seamless and professional experience. As a startup founder, finding a development partner that truly grasps technical complexity while keeping communication agile is rare.',
    language: 'en',
    createdAt: '2026-11-21T11:42:00Z',
    isCopied: true,
    isGoogleClicked: true,
  },
  {
    id: 'sub-003',
    brandId: 'career-dhara',
    brandName: 'Career Dhara',
    customerRole: 'Parent',
    rating: 5,
    answers: {
      service: 'B.Tech Admission Guidance',
      recipient: 'My Son / Daughter',
      sessionHelpfulness: 'Extremely helpful',
      requirementUnderstanding: 'Completely understood my requirements',
      collegeSelectionGuidance: 'Excellent',
      communicationSupport: 'Very responsive',
    },
    reviewText: 'Career Dhara se humne B.Tech Admission Guidance ke liye counselling session liya tha. Counsellors ne hamari requirements ko acche se samjha aur colleges ke realistic options suggest kiye.',
    language: 'hinglish',
    createdAt: '2026-11-20T16:20:00Z',
    isCopied: true,
    isGoogleClicked: false,
  },
  {
    id: 'sub-004',
    brandId: 'techogies',
    brandName: 'Techogies',
    customerRole: 'Student',
    rating: 5,
    answers: {
      course: 'Full Stack Development',
      learningMode: 'Classroom Training',
      trainerTechnicalKnowledge: 'Excellent',
      practicalClasses: 'Hands-on practical sessions',
      likedMost: ['Live projects', 'Trainer support'],
    },
    reviewText: 'My experience at Techogies has been very enriching. Enrolling in the Full Stack Development program via Classroom Training helped me gain practical, industry-relevant skills.',
    language: 'en',
    createdAt: '2026-11-20T14:05:00Z',
    isCopied: true,
    isGoogleClicked: true,
  },
  {
    id: 'sub-005',
    brandId: 'shorai',
    brandName: 'SHORAI',
    customerRole: 'School Principal',
    rating: 5,
    answers: {
      service: 'STEM Innovation Lab',
      userRole: 'School Principal',
      practicalLearning: 'Excellent hands-on learning',
      trainerQuality: 'Excellent',
      infrastructure: 'Excellent',
      impressedMost: ['Robotics activities', 'Innovation lab setup'],
    },
    reviewText: 'As a school principal, our institutional collaboration with SHORAI for STEM Innovation Lab has been exceptional. Their team demonstrated a structured methodology for STEM lab integration.',
    language: 'en',
    createdAt: '2026-11-19T09:30:00Z',
    isCopied: true,
    isGoogleClicked: true,
  },
  {
    id: 'sub-006',
    brandId: 'seg-academy',
    brandName: 'SEG Academy',
    customerRole: 'Trader',
    rating: 4,
    answers: {
      learnedTopics: ['Options Trading', 'Options Selling'],
      program: 'Option Hedging',
      trainerRating: 4,
      practicalLearning: 'Helpful live market discussions',
      likedMost: ['Trading strategies'],
    },
    reviewText: 'SEG Academy me options trading aur hedging concepts ko bohot practically discuss kiya gaya. Live market discussions se understanding deep hui.',
    language: 'hinglish',
    createdAt: '2026-11-18T15:10:00Z',
    isCopied: false,
    isGoogleClicked: false,
  }
];

export const storageService = {
  saveDraft(brandId: BrandId, answers: Record<string, any>, currentStep: number): void {
    try {
      localStorage.setItem(`${DRAFT_PREFIX}${brandId}`, JSON.stringify({ answers, currentStep, updatedAt: new Date().toISOString() }));
    } catch {
      // Storage unavailable or disabled
    }
  },

  getDraft(brandId: BrandId): { answers: Record<string, any>; currentStep: number } | null {
    try {
      const data = localStorage.getItem(`${DRAFT_PREFIX}${brandId}`);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Ignore parse error
    }
    return null;
  },

  clearDraft(brandId: BrandId): void {
    try {
      localStorage.removeItem(`${DRAFT_PREFIX}${brandId}`);
    } catch {
      // Ignore
    }
  },

  saveSubmission(submission: FeedbackSubmission): void {
    try {
      const list = this.getSubmissions();
      list.unshift(submission);
      localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(list));
    } catch {
      // Ignore
    }
  },

  updateSubmission(id: string, updates: Partial<FeedbackSubmission>): void {
    try {
      const list = this.getSubmissions();
      const index = list.findIndex(s => s.id === id);
      if (index !== -1) {
        list[index] = { ...list[index], ...updates };
        localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(list));
      }
    } catch {
      // Ignore
    }
  },

  getSubmissions(): FeedbackSubmission[] {
    try {
      const data = localStorage.getItem(SUBMISSIONS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Fallback
    }
    return [...INITIAL_MOCK_SUBMISSIONS];
  }
};
