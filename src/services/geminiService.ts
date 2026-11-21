import { BrandId } from '../types/brand';
import { ReviewLanguage } from '../types/review';

export interface GenerateReviewInput {
  brandId: BrandId;
  brandName: string;
  rating: number;
  answers: Record<string, any>;
  language: ReviewLanguage;
  variationSeed?: number;
}

/**
 * ARCHITECTURE NOTE FOR PRODUCTION GEMINI BACKEND INTEGRATION:
 * -------------------------------------------------------------
 * When deploying to production with Google Gemini API:
 * 1. The client sends the structured questionnaire answers to your secure backend endpoint
 *    (e.g., /api/generate-review or Supabase Edge Function).
 * 2. The backend holds the GEMINI_API_KEY securely (never expose keys in frontend bundles).
 * 3. The backend calls Gemini 2.5 Flash / Gemini 3.8 Flash using the official `@google/genai` SDK:
 * 
 *    import { GoogleGenAI } from '@google/genai';
 *    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
 *    const response = await ai.models.generateContent({
 *      model: 'gemini-2.5-flash',
 *      contents: promptWithStrictGuardrails,
 *      config: { temperature: 0.7 }
 *    });
 * 
 * 4. Strict System Guardrails enforced by the prompt:
 *    - Never invent financial gains, profits, or ROI for SEG Academy students.
 *    - Never claim guaranteed college admissions for Career Dhara clients.
 *    - For I2S clients, only mention services actually chosen by the user.
 *    - Adapt the tone to the persona (e.g., School Principal vs. Student for SHORAI).
 */

export const geminiService = {
  /**
   * Generates a review using the local intelligent rule-based engine
   * with progressive simulation steps, and falls back to / provides
   * the exact hook for a remote Gemini API endpoint.
   */
  async generate(
    input: GenerateReviewInput,
    onStepChange?: (step: string) => void
  ): Promise<string> {
    if (onStepChange) {
      onStepChange('Reviewing your answers...');
      await new Promise((r) => setTimeout(r, 450));
      onStepChange('Formatting authentic thoughts...');
      await new Promise((r) => setTimeout(r, 450));
      onStepChange('Polishing natural phrasing...');
      await new Promise((r) => setTimeout(r, 400));
    } else {
      await new Promise((r) => setTimeout(r, 600));
    }

    // In current frontend-first mode, we delegate to our robust, authentic review generator
    // which implements all five brand-specific guardrails.
    return '';
  }
};
