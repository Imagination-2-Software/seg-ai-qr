import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BrandInfo } from '../types/brand';

interface BrandHeaderProps {
  brand: BrandInfo;
  onBack: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  brand,
  onBack,
  currentStep,
  totalSteps,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#E6DFD3] px-4 py-3 transition-all">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBack}
            className="p-1.5 rounded-xl text-[#736B5E] hover:text-[#1C1F26] hover:bg-[#EFE9DF] transition-colors"
            title="Change Brand / Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FDFCF9] border border-[#E8E1D5] flex items-center justify-center p-1 shadow-2xs overflow-hidden">
              <img
                src={brand.logo || brand.markLogo}
                alt={brand.title}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#736B5E] block leading-none">
                SEG ACADEMY GROUP
              </span>
              <h1 className="text-sm font-bold text-[#1C1F26] leading-tight mt-0.5">
                {brand.title}
              </h1>
            </div>
          </div>
        </div>

        {currentStep !== undefined && totalSteps !== undefined && (
          <div className="text-right">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EFE9DF] border border-[#E3DBD0] text-[#1C1F26]">
              {currentStep} / {totalSteps}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};
