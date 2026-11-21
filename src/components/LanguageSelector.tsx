import React from 'react';
import { Globe } from 'lucide-react';
import { ReviewLanguage } from '../types/review';

interface LanguageSelectorProps {
  currentLanguage: ReviewLanguage;
  onChange: (lang: ReviewLanguage) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onChange,
}) => {
  const languages: { id: ReviewLanguage; label: string; badge: string }[] = [
    { id: 'en', label: 'English', badge: 'EN' },
    { id: 'hinglish', label: 'Hinglish', badge: 'Mix' },
    { id: 'hi', label: 'हिंदी', badge: 'HI' },
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-[#EFE9DF] rounded-xl border border-[#E0D8CB]">
      <div className="pl-2 pr-1 text-[#736B5E]">
        <Globe className="w-3.5 h-3.5" />
      </div>
      {languages.map((lang) => {
        const isActive = currentLanguage === lang.id;
        return (
          <button
            key={lang.id}
            type="button"
            onClick={() => onChange(lang.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              isActive
                ? 'bg-[#FDFCF9] text-[#0E1B33] shadow-xs border border-[#DCD3C5]'
                : 'text-[#736B5E] hover:text-[#1C1F26] hover:bg-[#E5DDD0]'
            }`}
          >
            <span>{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
};
