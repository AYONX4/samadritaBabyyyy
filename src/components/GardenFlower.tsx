import React, { useState } from 'react';

export type FlowerType = 'rose' | 'sunflower' | 'tulip' | 'daisy' | 'orchid' | 'cherry-blossom';

export interface FlowerData {
  type: FlowerType;
  label: string;
  title: string;
  meaning: string;
  quote: string;
}

interface GardenFlowerProps {
  flower: FlowerData;
  isUnlocked: boolean;
  isActive: boolean;
  onReveal: () => void;
  delay?: string;
}

const GardenFlower: React.FC<GardenFlowerProps> = ({ flower, isUnlocked, isActive, onReveal, delay = '0s' }) => {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    if (isUnlocked && !isActive) {
      setShowQuote(true);
      onReveal();
    } else if (isActive) {
      setShowQuote(!showQuote);
    }
  };

  const renderFlower = () => {
    switch (flower.type) {
      case 'rose':
        return (
          <svg viewBox="0 0 100 140" className="w-full h-full">
            <path d="M50 140 Q48 110, 50 80" stroke="hsl(120, 30%, 50%)" strokeWidth="3" fill="none" />
            <ellipse cx="40" cy="110" rx="12" ry="5" fill="hsl(120, 25%, 55%)" transform="rotate(-25, 40, 110)" />
            <ellipse cx="35" cy="55" rx="18" ry="25" fill="hsl(340, 60%, 75%)" transform="rotate(-25, 35, 55)" />
            <ellipse cx="65" cy="55" rx="18" ry="25" fill="hsl(340, 60%, 75%)" transform="rotate(25, 65, 55)" />
            <ellipse cx="50" cy="40" rx="16" ry="22" fill="hsl(340, 70%, 70%)" />
            <ellipse cx="42" cy="55" rx="12" ry="18" fill="hsl(340, 80%, 65%)" transform="rotate(-10, 42, 55)" />
            <ellipse cx="58" cy="55" rx="12" ry="18" fill="hsl(340, 80%, 65%)" transform="rotate(10, 58, 55)" />
            <circle cx="50" cy="55" r="8" fill="hsl(340, 85%, 60%)" />
          </svg>
        );
      
      case 'sunflower':
        return (
          <svg viewBox="0 0 100 140" className="w-full h-full">
            <path d="M50 140 Q52 110, 50 75" stroke="hsl(120, 30%, 45%)" strokeWidth="4" fill="none" />
            <ellipse cx="60" cy="105" rx="15" ry="6" fill="hsl(120, 25%, 50%)" transform="rotate(20, 60, 105)" />
            {[...Array(12)].map((_, i) => (
              <ellipse key={i} cx="50" cy="25" rx="6" ry="20" fill="hsl(45, 90%, 55%)" transform={`rotate(${i * 30}, 50, 50)`} />
            ))}
            <circle cx="50" cy="50" r="18" fill="hsl(30, 70%, 30%)" />
            <circle cx="50" cy="50" r="12" fill="hsl(30, 60%, 25%)" />
          </svg>
        );
      
      case 'tulip':
        return (
          <svg viewBox="0 0 100 140" className="w-full h-full">
            <path d="M50 140 Q48 100, 50 70" stroke="hsl(120, 30%, 50%)" strokeWidth="3" fill="none" />
            <ellipse cx="38" cy="115" rx="14" ry="5" fill="hsl(120, 25%, 55%)" transform="rotate(-30, 38, 115)" />
            <path d="M50 20 Q30 40, 35 70 Q50 65, 50 70 Q50 65, 65 70 Q70 40, 50 20" fill="hsl(15, 70%, 65%)" />
            <path d="M50 25 Q38 42, 42 65 Q50 60, 50 65" fill="hsl(15, 75%, 70%)" />
            <path d="M50 25 Q62 42, 58 65 Q50 60, 50 65" fill="hsl(15, 65%, 60%)" />
          </svg>
        );
      
      case 'daisy':
        return (
          <svg viewBox="0 0 100 140" className="w-full h-full">
            <path d="M50 140 Q52 105, 50 75" stroke="hsl(120, 30%, 50%)" strokeWidth="3" fill="none" />
            <ellipse cx="40" cy="110" rx="10" ry="4" fill="hsl(120, 25%, 55%)" transform="rotate(-20, 40, 110)" />
            {[...Array(10)].map((_, i) => (
              <ellipse key={i} cx="50" cy="28" rx="7" ry="22" fill="hsl(0, 0%, 98%)" transform={`rotate(${i * 36}, 50, 50)`} />
            ))}
            <circle cx="50" cy="50" r="14" fill="hsl(50, 90%, 55%)" />
            <circle cx="50" cy="50" r="10" fill="hsl(45, 85%, 50%)" />
          </svg>
        );
      
      case 'orchid':
        return (
          <svg viewBox="0 0 100 140" className="w-full h-full">
            <path d="M50 140 Q48 100, 50 80" stroke="hsl(120, 30%, 45%)" strokeWidth="3" fill="none" />
            <ellipse cx="60" cy="115" rx="10" ry="4" fill="hsl(120, 25%, 50%)" transform="rotate(25, 60, 115)" />
            {/* Orchid petals */}
            <ellipse cx="30" cy="55" rx="15" ry="20" fill="hsl(300, 40%, 80%)" transform="rotate(-30, 30, 55)" />
            <ellipse cx="70" cy="55" rx="15" ry="20" fill="hsl(300, 40%, 80%)" transform="rotate(30, 70, 55)" />
            <ellipse cx="50" cy="35" rx="12" ry="18" fill="hsl(300, 45%, 75%)" />
            <ellipse cx="40" cy="65" rx="10" ry="15" fill="hsl(300, 50%, 70%)" transform="rotate(-15, 40, 65)" />
            <ellipse cx="60" cy="65" rx="10" ry="15" fill="hsl(300, 50%, 70%)" transform="rotate(15, 60, 65)" />
            {/* Center lip */}
            <ellipse cx="50" cy="55" rx="8" ry="12" fill="hsl(320, 60%, 65%)" />
            <circle cx="50" cy="50" r="3" fill="hsl(50, 80%, 60%)" />
          </svg>
        );
      
      case 'cherry-blossom':
        return (
          <svg viewBox="0 0 100 140" className="w-full h-full">
            <path d="M50 140 Q55 100, 50 75" stroke="hsl(15, 30%, 40%)" strokeWidth="3" fill="none" />
            <path d="M50 100 Q35 85, 30 90" stroke="hsl(15, 30%, 40%)" strokeWidth="2" fill="none" />
            {/* Main blossom */}
            {[...Array(5)].map((_, i) => (
              <ellipse key={i} cx="50" cy="30" rx="10" ry="18" fill="hsl(350, 60%, 85%)" transform={`rotate(${i * 72}, 50, 50)`} />
            ))}
            <circle cx="50" cy="50" r="8" fill="hsl(350, 70%, 90%)" />
            <circle cx="50" cy="50" r="4" fill="hsl(50, 80%, 60%)" />
            {/* Small buds */}
            <circle cx="30" cy="88" r="5" fill="hsl(350, 60%, 80%)" />
            <circle cx="30" cy="88" r="3" fill="hsl(350, 70%, 85%)" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-500 ${
        isUnlocked ? 'cursor-pointer' : 'opacity-30 grayscale pointer-events-none'
      }`}
      style={{ animationDelay: delay }}
      onClick={handleClick}
    >
      <div className={`w-20 h-28 md:w-28 md:h-40 transition-all duration-500 ${
        isUnlocked ? 'animate-float' : ''
      } ${isActive ? 'scale-110' : 'hover:scale-105'}`}>
        {renderFlower()}
      </div>
      
      {/* Label below flower */}
      <p className={`mt-1 font-script text-lg md:text-xl transition-all duration-300 ${
        isActive ? 'text-primary' : 'text-foreground/70'
      }`}>
        {flower.label}
      </p>
      
      {/* Title below label */}
      <p className="text-xs md:text-sm text-muted-foreground font-body mt-0.5">
        {flower.title}
      </p>
      
      {/* Quote popup */}
      {isActive && showQuote && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-72 md:w-80 bg-card/95 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-xl border border-blush animate-fade-in-up z-20">
          <p className="font-script text-xl md:text-2xl text-primary mb-2">{flower.label}</p>
          <p className="text-xs text-muted-foreground font-body mb-3">{flower.meaning}</p>
          <p className="font-body text-sm md:text-base text-foreground italic leading-relaxed">
            "{flower.quote}"
          </p>
        </div>
      )}
    </div>
  );
};

export default GardenFlower;
