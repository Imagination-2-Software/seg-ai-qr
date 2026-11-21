import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../types/review';
import { MCQOptions } from './MCQOptions';
import { StarRating } from './StarRating';

interface QuestionCardProps {
  question: Question;
  value: any;
  onChange: (val: any) => void;
  accentColor?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange,
  accentColor = '#0E1B33',
}) => {
  const isMulti = question.type === 'multi_choice';

  const handleSelect = (optionVal: string) => {
    if (isMulti) {
      const currentArr: string[] = Array.isArray(value) ? [...value] : [];
      if (currentArr.includes(optionVal)) {
        onChange(currentArr.filter((item) => item !== optionVal));
      } else {
        onChange([...currentArr, optionVal]);
      }
    } else {
      onChange(optionVal);
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] shadow-[0_2px_8px_-2px_rgba(28,31,38,0.03)] p-5 sm:p-7"
    >
      <div className="mb-5 sm:mb-6">
        <div className="flex items-center gap-2 mb-2">
          {question.serviceKey && (
            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#EAE1D3] text-[#4A4235]">
              {question.serviceKey}
            </span>
          )}
          {isMulti && (
            <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#EFE9DF] text-[#736B5E]">
              Select all that apply
            </span>
          )}
          {question.required && (
            <span className="text-xs text-[#B8860B] font-medium">* Required</span>
          )}
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-[#1C1F26] leading-snug tracking-tight">
          {question.title}
        </h2>
        {question.subtitle && (
          <p className="text-xs sm:text-sm text-[#736B5E] mt-1 font-normal leading-relaxed">
            {question.subtitle}
          </p>
        )}
      </div>

      <div>
        {(question.type === 'single_choice' || question.type === 'multi_choice') && question.options && (
          <MCQOptions
            options={question.options}
            selected={value || (isMulti ? [] : '')}
            isMulti={isMulti}
            accentColor={accentColor}
            onSelect={handleSelect}
          />
        )}

        {question.type === 'star_rating' && (
          <StarRating
            value={value || 5}
            onChange={(rating) => onChange(rating)}
          />
        )}

        {question.type === 'textarea' && (
          <div className="space-y-2">
            <textarea
              rows={4}
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={question.placeholder || 'Type your message or notes here...'}
              className="w-full p-4 rounded-xl border border-[#E6DFD3] bg-[#FAF6F0] text-[#1C1F26] placeholder-[#9E9587] focus:outline-none focus:ring-2 focus:ring-[#0E1B33] focus:bg-[#FDFCF9] transition-all text-sm leading-relaxed resize-none"
            />
            <p className="text-[11px] text-[#8C8375] text-right">
              Optional feedback • Feel free to mention any specific details
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
