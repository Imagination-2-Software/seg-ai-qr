import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  maxStars?: number;
  interactive?: boolean;
}

const RATING_LABELS: Record<number, string> = {
  1: 'Needs Improvement',
  2: 'Fair Experience',
  3: 'Good Experience',
  4: 'Very Good Experience',
  5: 'Exceptional Experience! ⭐',
};

export const StarRating: React.FC<StarRatingProps> = ({
  value,
  onChange,
  maxStars = 5,
  interactive = true,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const displayRating = hoverRating ?? value;

  return (
    <div className="flex flex-col items-center justify-center py-3">
      <div className="flex items-center gap-1.5 sm:gap-2">
        {Array.from({ length: maxStars }).map((_, index) => {
          const starNumber = index + 1;
          const isFilled = starNumber <= displayRating;

          return (
            <motion.button
              type="button"
              key={starNumber}
              whileHover={interactive ? { scale: 1.15 } : {}}
              whileTap={interactive ? { scale: 0.9 } : {}}
              onClick={() => interactive && onChange(starNumber)}
              onMouseEnter={() => interactive && setHoverRating(starNumber)}
              onMouseLeave={() => interactive && setHoverRating(null)}
              disabled={!interactive}
              className={`p-1.5 sm:p-2 rounded-xl transition-colors focus:outline-none ${
                interactive ? 'cursor-pointer hover:bg-[#EFE8DC]' : 'cursor-default'
              }`}
            >
              <Star
                className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-200 ${
                  isFilled
                    ? 'fill-[#C5A059] text-[#C5A059] drop-shadow-2xs'
                    : 'text-[#D4CBBE] stroke-[1.5]'
                }`}
              />
            </motion.button>
          );
        })}
      </div>

      <motion.p
        key={displayRating}
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2.5 text-xs sm:text-sm font-semibold text-[#635B4E] h-5"
      >
        {displayRating > 0 ? RATING_LABELS[displayRating] || '' : 'Tap a star to rate'}
      </motion.p>
    </div>
  );
};
