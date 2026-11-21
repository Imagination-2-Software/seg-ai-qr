import { BrandId } from './brand';

export type QuestionType =
  | 'single_choice'
  | 'multi_choice'
  | 'star_rating'
  | 'textarea'
  | 'service_dynamic_group';

export interface QuestionOption {
  label: string;
  value: string;
  description?: string;
  badge?: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  options?: (string | QuestionOption)[];
  maxRating?: number;
  placeholder?: string;
  required?: boolean;
  minSelect?: number;
  maxSelect?: number;
  serviceKey?: string; // For dynamic groups
  condition?: (answers: Record<string, any>) => boolean;
}

export type ReviewLanguage = 'en' | 'hi' | 'hinglish';

export interface GeneratedReview {
  text: string;
  headline: string;
  keywords: string[];
  tone: string;
}

export interface FeedbackSubmission {
  id: string;
  brandId: BrandId;
  brandName: string;
  customerRole?: string;
  rating: number;
  answers: Record<string, any>;
  reviewText: string;
  language: ReviewLanguage;
  createdAt: string;
  isCopied: boolean;
  isGoogleClicked: boolean;
  servicesUsed?: string[];
}
