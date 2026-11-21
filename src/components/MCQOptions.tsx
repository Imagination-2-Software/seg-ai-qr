import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { QuestionOption } from '../types/review';

interface MCQOptionsProps {
  options: (string | QuestionOption)[];
  selected: string | string[];
  isMulti?: boolean;
  accentColor?: string;
  onSelect: (value: string) => void;
}

export const MCQOptions: React.FC<MCQOptionsProps> = ({
  options,
  selected,
  isMulti = false,
  accentColor = '#0E1B33',
  onSelect,
}) => {
  const isSelected = (val: string) => {
    if (isMulti && Array.isArray(selected)) {
      return selected.includes(val);
    }
    return selected === val;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
      {options.map((opt, idx) => {
        const label = typeof opt === 'string' ? opt : opt.label;
        const value = typeof opt === 'string' ? opt : opt.value;
        const description = typeof opt === 'object' ? opt.description : undefined;
        const active = isSelected(value);

        return (
          <motion.button
            key={value || idx}
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(value)}
            className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${
              active
                ? 'bg-[#EFE8DC] border-[#0E1B33] shadow-xs'
                : 'bg-[#FDFCF9] border-[#E6DFD3] hover:border-[#D4CBBE] hover:bg-[#F9F6F0]'
            }`}
          >
            <div className="flex-1 pr-1">
              <span className={`text-sm sm:text-base font-semibold leading-snug block ${
                active ? 'text-[#0E1B33]' : 'text-[#1C1F26]'
              }`}>
                {label}
              </span>
              {description && (
                <span className="text-xs text-[#736B5E] mt-1 block">
                  {description}
                </span>
              )}
            </div>

            <div
              className={`w-5 h-5 rounded-${isMulti ? 'md' : 'full'} border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                active
                  ? 'bg-[#0E1B33] border-[#0E1B33] text-white'
                  : 'border-[#D4CBBE] bg-white'
              }`}
            >
              {active && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};
