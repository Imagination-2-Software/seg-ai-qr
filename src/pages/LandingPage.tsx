import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, BarChart3, Sparkles, Shield, Award, CheckCircle2, Building2 } from 'lucide-react';
import { BRAND_LIST } from '../brands/brandConfig';
import { BrandCard } from '../components/BrandCard';
import { BrandInfo } from '../types/brand';

interface LandingPageProps {
  onSelectBrand: (brand: BrandInfo) => void;
  onOpenQR: () => void;
  onOpenDashboard: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectBrand,
  onOpenQR,
  onOpenDashboard,
}) => {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#1C1F26] flex flex-col selection:bg-[#0E1B33] selection:text-[#F7F3EC]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#E6DFD3] px-4 py-3 sm:py-3.5">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/SEGAcademy Training Workshop Logo.png"
              alt="SEG Academy"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={onOpenQR}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1C1F26] bg-[#EFE9DF] hover:bg-[#E5DDD0] transition-colors flex items-center gap-1.5 border border-[#E0D8CB]"
              title="View Reception QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-[#0E1B33]" />
              <span className="text-[11px] sm:text-xs">QR Code</span>
            </button>
            <button
              onClick={onOpenDashboard}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#0E1B33] hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-xs"
              title="Admin Analytics Dashboard"
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#EFE9DF]" />
              <span className="text-[11px] sm:text-xs">Analytics</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-6 sm:py-9 flex flex-col justify-between">
        <div>
          {/* Creative Editorial Hero Headline */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DC] border border-[#E2D9CC] text-[#635B4E] text-[11px] font-semibold mb-3.5 tracking-wide"
            >
              <Sparkles className="w-3 h-3 text-[#B8860B]" />
              <span>CENTRALIZED FEEDBACK HUB</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-[#1C1F26]"
            >
              <span className="font-editorial italic font-normal text-3xl sm:text-4xl text-[#3A352D] block">
                Your Experience,
              </span>
              <span className="font-black tracking-tight text-2xl sm:text-3xl uppercase text-[#0E1B33] block mt-0.5">
                Matters To Us
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs sm:text-sm text-[#736B5E] mt-2 max-w-xs sm:max-w-sm mx-auto leading-relaxed"
            >
              Select the brand you interacted with to share your feedback in a few simple taps.
            </motion.p>
          </div>

          {/* Compact 5-Brand Mobile Cards List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="space-y-2.5 sm:space-y-3"
          >
            {BRAND_LIST.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <BrandCard brand={brand} onSelect={onSelectBrand} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Minimalist Trust Indicator Bar */}
        <div className="mt-8 pt-5 border-t border-[#E6DFD3] flex items-center justify-around text-center text-[#736B5E] text-[11px]">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#0E1B33]" />
            <span className="font-medium">100% Genuine</span>
          </div>
          <span className="text-[#D4CBBE]">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-medium">Single Reception QR</span>
          </div>
          <span className="text-[#D4CBBE]">•</span>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="font-medium">Google Compatible</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#EFE9DF] border-t border-[#E6DFD3] py-5 px-4 text-center mt-auto">
        <div className="max-w-md mx-auto flex flex-col items-center gap-1 text-[#736B5E]">
          <p className="text-xs font-bold text-[#1C1F26] tracking-wider uppercase">
            Powered by SEG Academy
          </p>
          <p className="text-[11px]">
            One Organization. Five Specialized Brands.
          </p>
        </div>
      </footer>
    </div>
  );
};
