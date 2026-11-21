import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { BrandInfo } from '../types/brand';
import { Question } from '../types/review';
import { getBrandQuestions } from '../brands/brandConfig';
import { BrandHeader } from '../components/BrandHeader';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { reviewGenerator } from '../services/reviewGenerator';
import { geminiService } from '../services/geminiService';
import { storageService } from '../services/storageService';

interface ReviewFlowProps {
  brand: BrandInfo;
  onBackToBrands: () => void;
  onComplete: (data: {
    brand: BrandInfo;
    answers: Record<string, any>;
    reviewText: string;
    rating: number;
    submissionId: string;
  }) => void;
}

export const ReviewFlow: React.FC<ReviewFlowProps> = ({
  brand,
  onBackToBrands,
  onComplete,
}) => {
  // Load draft if available
  const initialDraft = storageService.getDraft(brand.id);
  const [answers, setAnswers] = useState<Record<string, any>>(
    initialDraft?.answers || { overallRating: 5 }
  );
  const [stepIndex, setStepIndex] = useState<number>(
    initialDraft?.currentStep !== undefined ? Math.min(initialDraft.currentStep, 0) : 0
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('Reviewing your answers...');
  const [validationError, setValidationError] = useState<string | null>(null);

  // Dynamically compute active questions list (supports I2S dynamic services!)
  const questions: Question[] = getBrandQuestions(brand.id, answers);
  const currentQuestion: Question | undefined = questions[stepIndex];
  const totalSteps = questions.length;

  // Persist draft on answers/step change
  useEffect(() => {
    storageService.saveDraft(brand.id, answers, stepIndex);
  }, [brand.id, answers, stepIndex]);

  const handleAnswerChange = (val: any) => {
    setValidationError(null);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: val,
    }));
  };

  const handleNext = async () => {
    if (!currentQuestion) return;

    const currentVal = answers[currentQuestion.id];

    // Validation
    if (currentQuestion.required) {
      if (currentQuestion.type === 'multi_choice') {
        const arr = Array.isArray(currentVal) ? currentVal : [];
        if (arr.length === 0) {
          setValidationError('Please select at least one option to continue.');
          return;
        }
      } else if (currentVal === undefined || currentVal === '' || currentVal === null) {
        setValidationError('Please select an option to continue.');
        return;
      }
    }

    setValidationError(null);

    // If more questions remain, go to next step
    if (stepIndex < totalSteps - 1) {
      setStepIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final step -> trigger AI review generation
      await triggerGeneration();
    }
  };

  const handlePrevious = () => {
    setValidationError(null);
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    } else {
      onBackToBrands();
    }
  };

  const triggerGeneration = async () => {
    setIsGenerating(true);
    try {
      await geminiService.generate(
        {
          brandId: brand.id,
          brandName: brand.title,
          rating: answers.overallRating || 5,
          answers,
          language: 'en',
          variationSeed: 0,
        },
        (step) => setGenerationStep(step)
      );

      const generatedText = reviewGenerator.generate({
        brandId: brand.id,
        brandName: brand.title,
        rating: answers.overallRating || 5,
        answers,
        language: 'en',
        variationSeed: 0,
      });

      const submissionId = `sub-${Date.now()}`;

      storageService.saveSubmission({
        id: submissionId,
        brandId: brand.id,
        brandName: brand.title,
        customerRole: answers.userRole || answers.customerType || 'Guest',
        rating: answers.overallRating || 5,
        answers,
        reviewText: generatedText,
        language: 'en',
        createdAt: new Date().toISOString(),
        isCopied: false,
        isGoogleClicked: false,
        servicesUsed: Array.isArray(answers.servicesUsed) ? answers.servicesUsed : undefined,
      });

      storageService.clearDraft(brand.id);

      onComplete({
        brand,
        answers,
        reviewText: generatedText,
        rating: answers.overallRating || 5,
        submissionId,
      });
    } catch (err) {
      console.error('Error generating review:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Full-screen generation loading screen
  if (isGenerating) {
    return (
      <div className="min-h-screen bg-[#F7F3EC] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full flex flex-col items-center"
        >
          <div className="relative mb-6">
            <div className="w-18 h-18 rounded-2xl bg-[#FDFCF9] border border-[#E6DFD3] flex items-center justify-center shadow-md">
              <Sparkles className="w-9 h-9 text-[#B8860B] animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#0E1B33] text-white flex items-center justify-center shadow-xs">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#1C1F26] mb-1.5 font-editorial italic">
            Crafting Your Review
          </h3>
          <p className="text-xs text-[#736B5E] font-medium mb-6">
            {generationStep}
          </p>

          <div className="w-full bg-[#E8E1D5] h-1.5 rounded-full overflow-hidden max-w-xs">
            <motion.div
              className="h-full bg-[#0E1B33]"
              initial={{ width: '25%' }}
              animate={{ width: '92%' }}
              transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>

          <p className="text-[11px] text-[#8C8375] mt-6 max-w-xs">
            Synthesizing genuine feedback for {brand.title} • No exaggerated claims
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F3EC] flex flex-col selection:bg-[#0E1B33] selection:text-[#F7F3EC]">
      {/* Brand Header */}
      <BrandHeader
        brand={brand}
        onBack={handlePrevious}
        currentStep={stepIndex + 1}
        totalSteps={totalSteps}
      />

      {/* Progress Bar */}
      <ProgressBar
        currentStep={stepIndex + 1}
        totalSteps={totalSteps}
        accentColor="#0E1B33"
      />

      {/* Main Question Area */}
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-5 sm:py-7 flex flex-col justify-between">
        <div>
          {/* Brand Headline banner */}
          <div className="mb-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EFE9DF] border border-[#E0D8CB] text-[#635B4E]">
                {brand.category}
              </span>
              <span className="text-xs text-[#C5BDB0]">•</span>
              <span className="text-xs text-[#736B5E] font-medium">
                {brand.title}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentQuestion && (
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                value={answers[currentQuestion.id]}
                onChange={handleAnswerChange}
                accentColor="#0E1B33"
              />
            )}
          </AnimatePresence>

          {/* Validation alert */}
          {validationError && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 rounded-xl bg-[#FBF0EE] border border-[#F2D0CA] text-rose-800 text-xs font-semibold flex items-center justify-between"
            >
              <span>{validationError}</span>
            </motion.div>
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="sticky bottom-0 bg-[#F7F3EC]/95 backdrop-blur-md pt-3.5 pb-6 mt-6 border-t border-[#E6DFD3] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            className="px-4 py-3 rounded-xl border border-[#DCD3C5] bg-[#FDFCF9] text-[#1C1F26] hover:bg-[#EFE9DF] font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{stepIndex === 0 ? 'Brands' : 'Back'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex-1 py-3 px-5 rounded-xl font-bold text-white bg-[#0E1B33] hover:bg-slate-800 active:scale-[0.99] transition-all shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
          >
            {stepIndex === totalSteps - 1 ? (
              <>
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Generate Authentic Review</span>
              </>
            ) : (
              <>
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </main>
    </div>
  );
};
