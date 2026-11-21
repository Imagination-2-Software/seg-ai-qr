import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  accentColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  accentColor = '#0E1B33',
}) => {
  const percentage = Math.min(Math.round((currentStep / totalSteps) * 100), 100);

  return (
    <div className="w-full bg-[#E8E1D5] h-1 overflow-hidden">
      <motion.div
        className="h-full"
        style={{ backgroundColor: accentColor || '#0E1B33' }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  );
};
