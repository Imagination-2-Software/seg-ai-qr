import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  ArrowLeft,
  Star,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BrandInfo } from '../types/brand';
import { ReviewLanguage } from '../types/review';
import { LanguageSelector } from '../components/LanguageSelector';
import { reviewGenerator } from '../services/reviewGenerator';
import { storageService } from '../services/storageService';

interface ReviewResultProps {
  brand: BrandInfo;
  initialReviewText: string;
  rating: number;
  answers: Record<string, any>;
  submissionId: string;
  onEditAnswers: () => void;
  onBackToHome: () => void;
}

export const ReviewResult: React.FC<ReviewResultProps> = ({
  brand,
  initialReviewText,
  rating,
  answers,
  submissionId,
  onEditAnswers,
  onBackToHome,
}) => {
  const [reviewText, setReviewText] = useState(initialReviewText);
  const [language, setLanguage] = useState<ReviewLanguage>('en');
  const [variationSeed, setVariationSeed] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [autoCopiedNotice, setAutoCopiedNotice] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  // Automatically copy review to clipboard on generation completion
  React.useEffect(() => {
    const copyImmediately = async () => {
      try {
        await navigator.clipboard.writeText(initialReviewText);
        setIsCopied(true);
        setAutoCopiedNotice(true);
        storageService.updateSubmission(submissionId, { isCopied: true });

        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.75 },
        });

        setTimeout(() => setIsCopied(false), 3500);
        setTimeout(() => setAutoCopiedNotice(false), 5000);
      } catch (err) {
        // Fallback if browser permission requires explicit tap
        console.log('Auto-copy awaiting manual tap:', err);
      }
    };

    copyImmediately();
  }, [initialReviewText, submissionId]);

  const handleLanguageChange = (newLang: ReviewLanguage) => {
    setLanguage(newLang);
    const newText = reviewGenerator.generate({
      brandId: brand.id,
      brandName: brand.title,
      rating,
      answers,
      language: newLang,
      variationSeed,
    });
    setReviewText(newText);
    navigator.clipboard?.writeText(newText).catch(() => {});
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    const newSeed = variationSeed + 1;
    setVariationSeed(newSeed);

    setTimeout(() => {
      const newText = reviewGenerator.generate({
        brandId: brand.id,
        brandName: brand.title,
        rating,
        answers,
        language,
        variationSeed: newSeed,
      });
      setReviewText(newText);
      navigator.clipboard?.writeText(newText).catch(() => {});
      setIsRegenerating(false);
    }, 250);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reviewText);
      setIsCopied(true);
      storageService.updateSubmission(submissionId, { isCopied: true });

      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 },
      });

      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleDirectPostClick = () => {
    // Copy latest review text to clipboard immediately on tap
    navigator.clipboard?.writeText(reviewText).catch(() => {});
    setIsCopied(true);
    storageService.updateSubmission(submissionId, { isCopied: true, isGoogleClicked: true });
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] flex flex-col selection:bg-[#0E1B33] selection:text-[#F7F3EC] pb-12">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#E6DFD3] px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <button
            onClick={onEditAnswers}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#736B5E] hover:text-[#1C1F26] p-1.5 rounded-lg hover:bg-[#EFE9DF] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Edit Answers</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#1C1F26]">
              {brand.title}
            </span>
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold ml-1 text-[#1C1F26]">{rating}.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-6 sm:py-8">
        {/* Title area */}
        <div className="text-center mb-5 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-11 h-11 rounded-2xl bg-[#EFE8DC] text-[#B8860B] border border-[#E0D7C9] flex items-center justify-center mx-auto mb-2.5 shadow-2xs"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#1C1F26] tracking-tight">
            <span className="font-editorial italic font-normal text-2xl sm:text-3xl text-[#3A352D] block">
              Your Experience,
            </span>
            <span className="block font-black text-xl sm:text-2xl tracking-tight uppercase text-[#0E1B33]">
              Beautifully Expressed
            </span>
          </h1>
          <p className="text-xs text-[#736B5E] mt-1 max-w-xs mx-auto leading-relaxed">
            Your review is ready and copied to clipboard. Tap below to open Google directly, rate stars, and paste.
          </p>
        </div>

        {/* Auto-copied notification banner */}
        {autoCopiedNotice && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mb-4 p-3 rounded-xl bg-[#EAF5EC] border border-[#CDE5D2] text-[#1E5629] text-xs font-semibold flex items-center justify-center gap-2 shadow-2xs"
          >
            <Check className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
            <span>Review automatically copied to clipboard! Ready to paste into Google.</span>
          </motion.div>
        )}

        {/* Review Editor Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] shadow-[0_2px_8px_-2px_rgba(28,31,38,0.03)] p-4 sm:p-5 mb-5"
        >
          {/* Card header controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-3.5 pb-3 border-b border-[#EFE9DF]">
            <LanguageSelector
              currentLanguage={language}
              onChange={handleLanguageChange}
            />

            <button
              type="button"
              onClick={handleRegenerate}
              disabled={isRegenerating}
              className="text-xs font-semibold text-[#736B5E] hover:text-[#0E1B33] flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-[#EFE9DF] transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin text-[#0E1B33]' : ''}`} />
              <span>Regenerate Phrasing</span>
            </button>
          </div>

          {/* Editable text area */}
          <div className="relative">
            <textarea
              rows={5}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-3.5 sm:p-4 rounded-xl border border-[#E6DFD3] bg-[#FAF6F0] text-[#1C1F26] font-medium text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0E1B33] focus:bg-[#FDFCF9] transition-all resize-y"
              placeholder="Your review will appear here..."
            />
            <div className="flex items-center justify-between mt-1.5 text-[11px] text-[#8C8375] px-1">
              <span>Feel free to edit before posting</span>
              <span>{reviewText.length} chars</span>
            </div>
          </div>

          {/* Action buttons inside card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
            <button
              type="button"
              onClick={handleCopy}
              className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isCopied
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-[#EFE9DF] text-[#1C1F26] border-[#DDD5C7] hover:bg-[#E5DDD0]'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Review Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#736B5E]" />
                  <span>Copy Review</span>
                </>
              )}
            </button>

            <a
              href={brand.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDirectPostClick}
              className="py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0E1B33] hover:bg-slate-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
            >
              <span>Post on Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
            </a>
          </div>

          <div className="mt-2.5 text-center">
            <p className="text-[11px] text-[#8C8375]">
              ⭐ Tapping <strong>Post on Google Reviews</strong> directly opens {brand.title}'s Google page — just rate stars & paste!
            </p>
          </div>
        </motion.div>

        {/* Back and Restart Options */}
        <div className="flex items-center justify-between gap-3 px-1 mb-6">
          <button
            type="button"
            onClick={onEditAnswers}
            className="text-xs font-semibold text-[#736B5E] hover:text-[#1C1F26] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Edit Answers</span>
          </button>

          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs font-semibold text-[#0E1B33] hover:underline transition-colors cursor-pointer"
          >
            Return to Brands
          </button>
        </div>

        {/* Google Genuine Policy Alert */}
        <div className="rounded-xl p-3.5 bg-[#EFE9DF] border border-[#E0D8CB] text-xs text-[#736B5E] flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#8C8375] shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            Google Review Integrity: This portal assists in expressing honest feedback clearly without falsified ratings or incentives.
          </p>
        </div>
      </main>
    </div>
  );
};
