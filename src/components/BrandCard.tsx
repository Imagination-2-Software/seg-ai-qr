import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp, GraduationCap, Code2, Bot, BrainCircuit } from 'lucide-react';
import { BrandInfo } from '../types/brand';

interface BrandCardProps {
  brand: BrandInfo;
  onSelect: (brand: BrandInfo) => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, onSelect }) => {
  const getFallbackIcon = () => {
    const iconClass = "w-6 h-6";
    switch (brand.iconName) {
      case 'TrendingUp':
        return <TrendingUp className={`${iconClass} text-emerald-700`} />;
      case 'GraduationCap':
        return <GraduationCap className={`${iconClass} text-blue-700`} />;
      case 'Code2':
        return <Code2 className={`${iconClass} text-cyan-700`} />;
      case 'Bot':
        return <Bot className={`${iconClass} text-sky-700`} />;
      case 'BrainCircuit':
        return <BrainCircuit className={`${iconClass} text-[#FF5500]`} />;
      default:
        return <TrendingUp className={iconClass} />;
    }
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      onClick={() => onSelect(brand)}
      className="w-full text-left bg-[#FDFCF9] hover:bg-white border border-[#E6DFD3] hover:border-[#D4CBBE] active:bg-[#F5EFE6] rounded-2xl p-3.5 sm:p-4 transition-all duration-200 shadow-[0_2px_6px_-2px_rgba(28,31,38,0.03)] hover:shadow-[0_6px_16px_-4px_rgba(28,31,38,0.06)] flex items-center justify-between gap-3 group cursor-pointer relative overflow-hidden"
    >
      {/* Subtle brand color edge line */}
      <div
        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
        style={{ backgroundColor: brand.colorTheme.accent }}
      />

      <div className="flex items-center gap-3.5 pl-1.5 min-w-0">
        {/* Brand Logo / Mark */}
        <div className="w-14 h-14 rounded-xl bg-[#F5EFE6] border border-[#E8E1D5] flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform duration-200">
          {brand.logo ? (
            <img
              src={brand.logo}
              alt={brand.title}
              className="max-h-10 max-w-10 object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : null}
          <div className={brand.logo ? 'hidden' : 'block'}>
            {getFallbackIcon()}
          </div>
        </div>

        {/* Text info - Short, no description! */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-[#1C1F26] tracking-tight truncate group-hover:text-[#0E1B33]">
              {brand.title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[11px] font-semibold text-[#787166] tracking-wide uppercase">
              {brand.category}
            </span>
          </div>
        </div>
      </div>

      {/* Sleek mobile arrow button */}
      <div className="w-8 h-8 rounded-full bg-[#F5EFE6] group-hover:bg-[#EAE2D5] border border-[#E5DDD0] text-[#736B5E] group-hover:text-[#1C1F26] flex items-center justify-center shrink-0 transition-colors">
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </motion.button>
  );
};
