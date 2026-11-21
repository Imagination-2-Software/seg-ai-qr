import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Check, Copy, AlertCircle, X, ShieldCheck } from 'lucide-react';
import { BrandInfo } from '../types/brand';

interface GoogleReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandInfo;
  reviewText: string;
  rating: number;
}

export const GoogleReviewModal: React.FC<GoogleReviewModalProps> = ({
  isOpen,
  onClose,
  brand,
  reviewText,
  rating,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAgain = async () => {
    try {
      await navigator.clipboard.writeText(reviewText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore
    }
  };

  const handleOpenGoogle = () => {
    if (brand.isConfiguredGoogleUrl && brand.googleReviewUrl) {
      window.open(brand.googleReviewUrl, '_blank', 'noopener,noreferrer');
    } else {
      const query = encodeURIComponent(`${brand.title} Varanasi review`);
      window.open(`https://www.google.com/search?q=${query}`, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1F26]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-[#FDFCF9] rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-[#E6DFD3] relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#EFE8DC] border border-[#E0D7C9] flex items-center justify-center text-[#0E1B33]">
                <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1C1F26]">
                  Ready for Google
                </h3>
                <p className="text-[11px] text-[#736B5E]">
                  Review copied to clipboard
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#8C8375] hover:text-[#1C1F26] p-1 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Review snippet preview */}
          <div className="bg-[#FAF6F0] border border-[#E6DFD3] rounded-xl p-3 mb-3.5 text-xs text-[#1C1F26] leading-relaxed max-h-28 overflow-y-auto">
            <div className="font-semibold text-[#1C1F26] mb-1 flex items-center justify-between">
              <span>{brand.title} • {rating}★</span>
              <button
                type="button"
                onClick={handleCopyAgain}
                className="text-[#0E1B33] hover:underline font-bold flex items-center gap-1 cursor-pointer text-[11px]"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <p className="text-[#635B4E] italic font-serif-accent text-sm leading-normal">"{reviewText}"</p>
          </div>

          {/* Simple 3-step Instructions */}
          <div className="space-y-2 mb-4 text-[11px] text-[#736B5E]">
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#EFE9DF] text-[#1C1F26] font-bold flex items-center justify-center shrink-0 text-[10px]">
                1
              </span>
              <span>Tap below to open <strong>{brand.title}</strong> on Google Reviews.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#EFE9DF] text-[#1C1F26] font-bold flex items-center justify-center shrink-0 text-[10px]">
                2
              </span>
              <span>Select your honest star rating.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-[#EFE9DF] text-[#1C1F26] font-bold flex items-center justify-center shrink-0 text-[10px]">
                3
              </span>
              <span><strong>Paste</strong> your copied review and tap <strong>Post</strong>.</span>
            </div>
          </div>

          {/* Configuration Note */}
          {!brand.isConfiguredGoogleUrl && (
            <div className="mb-3.5 p-2.5 rounded-xl bg-[#FAF1E3] border border-[#EBD6B5] text-[#785418] text-[11px] flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Demo Google Review Link</p>
                <p className="text-[10px] mt-0.5">
                  Live URL placeholder configured in <code className="bg-[#F3E2C9] px-1 rounded">brandConfig.ts</code>.
                </p>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleOpenGoogle}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-white bg-[#0E1B33] hover:bg-slate-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs text-xs cursor-pointer"
            >
              <span>Continue to Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs font-semibold text-[#736B5E] hover:text-[#1C1F26] transition-colors cursor-pointer"
            >
              Back to Review
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
