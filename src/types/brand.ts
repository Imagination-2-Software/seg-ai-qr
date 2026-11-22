export type BrandId = 'seg-academy' | 'career-dhara' | 'techogies' | 'shorai' | 'i2s';

export interface BrandColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  accentLight: string;
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  cardBorder: string;
  cardHoverBorder: string;
  isDarkTheme?: boolean;
}

export interface BrandInfo {
  id: BrandId;
  title: string;
  parentBrand: string;
  tagline: string;
  description: string;
  category: string;
  categoryLabel: string;
  websiteUrl: string;
  googleReviewUrl: string; // Direct review dialog URL
  googlePlaceId?: string;
  googleFid?: string;
  isConfiguredGoogleUrl: boolean;
  logo: string;
  markLogo: string;
  iconName: 'TrendingUp' | 'GraduationCap' | 'Code2' | 'Bot' | 'BrainCircuit';
  colorTheme: BrandColorTheme;
  visualTags: string[];
  visualHighlights: string;
  headline: string;
  subheading: string;
}
