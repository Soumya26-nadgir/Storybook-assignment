import React from 'react';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';
export interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}
export const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  className,
}) => {
  const clampedRating = Math.max(0, Math.min(maxRating, rating));
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <div 
        className="flex items-center gap-0.5"
        role="img"
        aria-label={`Rating: ${clampedRating} out of ${maxRating} stars`}
      >
        {Array.from({ length: maxRating }, (_, index) => {
          const starNumber = index + 1;
          const isFilled = starNumber <= Math.floor(clampedRating);
          const isPartial = Math.floor(clampedRating) === index && clampedRating % 1 >= 0.5;
          return (
            <div key={index} className="relative">
              <Star
                className={clsx(
                  sizeClasses[size],
                  'text-gray-300',
                  'transition-colors duration-200',
                )}
                aria-hidden="true"
              />
              <div 
                className={clsx(
                  'absolute top-0 left-0 overflow-hidden',
                  {
                    'w-1/2': isPartial,
                    'w-full': isFilled,
                    'w-0': !isFilled && !isPartial,
                  }
                )}
              >
                <Star
                  className={clsx(
                    sizeClasses[size],
                    'text-yellow-400 fill-yellow-400',
                    'transition-colors duration-200',
                  )}
                  aria-hidden="true"
                />
              </div>
            </div>
          );
        })}
      </div>
      {showValue && (
        <span className={clsx('text-gray-600 font-medium', textSizeClasses[size])}>
          {clampedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
};