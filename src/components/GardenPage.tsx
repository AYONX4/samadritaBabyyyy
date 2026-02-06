import React, { useState, useEffect } from 'react';
import FloatingPetals from './FloatingPetals';

interface FlowerData {
  type: string;
  label: string;
  title: string;
  meaning: string;
  quote: string;
}

const flowers: FlowerData[] = [
  {
    type: 'rose',
    label: 'Rose',
    title: 'The Depth of Your Love',
    meaning: 'Love, depth, commitment',
    quote: "You love in a very different way—very deeply, with so much emotion. I know that, and it means a lot to me."
  },
  {
    type: 'sunflower',
    label: 'Sunflower',
    title: 'You Make My Days Brighter',
    meaning: 'Warmth, hope, positivity',
    quote: "One smile from you makes my whole day better, and even a single call,text can turn makes my mood good"
  },
  {
    type: 'tulip',
    label: 'Tulip',
    title: 'Your Soft, Childlike Comfort',
    meaning: 'Care, emotional safety',
    quote: "Love the way you talk like bacchader moto hasi hehehehehe, shut up bolaaa aww love thissssss(English e parchi na r tai banglay likhlam)"
  },
  {
    type: 'daisy',
    label: 'Daisy',
    title: 'Pure Innocence',
    meaning: 'Innocence, authenticity',
    quote: "ekdom ekta innocent bacchaa, cutuuu baccha, aww ki sunodor babyyyy ,dur theke dekhe mone hoy ki sundor cute ekta baccha ascheeee😭"
  },
  {
    type: 'orchid',
    label: 'Orchid',
    title: 'The Love You Show So Effortlessly',
    meaning: 'Quiet strength, resilience',
    quote: "Love the way you talk love the way you treat me hehehehe sudhu ghumas besi but BESTTTTTT tuiii "
  },
  {
    type: 'cherry-blossom',
    label: 'Cherry Blossom',
    title: 'The Best Person in My Life',
    meaning: 'Fleeting beauty, precious moments',
    quote: "You’re the best person I’ve met in 2025—actually, you’re the best person for my life seriously bolchii BEST EKDOMMMMMMM"
  },
];

const FlowerSVG: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
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
          <ellipse cx="30" cy="55" rx="15" ry="20" fill="hsl(300, 40%, 80%)" transform="rotate(-30, 30, 55)" />
          <ellipse cx="70" cy="55" rx="15" ry="20" fill="hsl(300, 40%, 80%)" transform="rotate(30, 70, 55)" />
          <ellipse cx="50" cy="35" rx="12" ry="18" fill="hsl(300, 45%, 75%)" />
          <ellipse cx="40" cy="65" rx="10" ry="15" fill="hsl(300, 50%, 70%)" transform="rotate(-15, 40, 65)" />
          <ellipse cx="60" cy="65" rx="10" ry="15" fill="hsl(300, 50%, 70%)" transform="rotate(15, 60, 65)" />
          <ellipse cx="50" cy="55" rx="8" ry="12" fill="hsl(320, 60%, 65%)" />
          <circle cx="50" cy="50" r="3" fill="hsl(50, 80%, 60%)" />
        </svg>
      );
    case 'cherry-blossom':
      return (
        <svg viewBox="0 0 100 140" className="w-full h-full">
          <path d="M50 140 Q55 100, 50 75" stroke="hsl(15, 30%, 40%)" strokeWidth="3" fill="none" />
          <path d="M50 100 Q35 85, 30 90" stroke="hsl(15, 30%, 40%)" strokeWidth="2" fill="none" />
          {[...Array(5)].map((_, i) => (
            <ellipse key={i} cx="50" cy="30" rx="10" ry="18" fill="hsl(350, 60%, 85%)" transform={`rotate(${i * 72}, 50, 50)`} />
          ))}
          <circle cx="50" cy="50" r="8" fill="hsl(350, 70%, 90%)" />
          <circle cx="50" cy="50" r="4" fill="hsl(50, 80%, 60%)" />
          <circle cx="30" cy="88" r="5" fill="hsl(350, 60%, 80%)" />
          <circle cx="30" cy="88" r="3" fill="hsl(350, 70%, 85%)" />
        </svg>
      );
    default:
      return null;
  }
};

const GardenPage: React.FC = () => {
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(false);
  // const [showNextFlower, setShowNextFlower] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [flowerVisible, setFlowerVisible] = useState(true);

  const currentFlower = flowers[currentFlowerIndex];
  const isLastFlower = currentFlowerIndex === flowers.length - 1;

  const handleFlowerClick = () => {
  if (!showQuote) {
    // First click → show quote
    setShowQuote(true);
  } else {
    // Second click → next flower or complete
    if (isLastFlower) {
      setIsComplete(true);
    } else {
      handleNextFlower();
    }
  }
};


 const handleNextFlower = () => {
  setFlowerVisible(false);
  setShowQuote(false);

  setTimeout(() => {
    setCurrentFlowerIndex(prev => prev + 1);
    setFlowerVisible(true);
  }, 400);
};


  // useEffect(() => {
  //   if (showNextFlower) {
  //     const timer = setTimeout(handleNextFlower, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showNextFlower]);

  return (
    <div className="min-h-screen bg-soft-gradient flex flex-col items-center relative overflow-hidden px-4 py-8 md:py-12">
      <FloatingPetals />
      
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto w-full">
        {/* Title */}
        <h1 className="font-script text-4xl md:text-6xl text-foreground text-center mb-2 opacity-0 animate-fade-in-up">
          Your Garden
        </h1>
        
        {/* Progress indicator */}
        <div className="flex gap-2 mb-8 opacity-0 animate-fade-in-up animation-delay-200">
          {flowers.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index < currentFlowerIndex ? 'bg-primary' : 
                index === currentFlowerIndex ? 'bg-primary scale-150' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {!isComplete ? (
          /* Single flower display */
          <div className="flex flex-col items-center w-full">
            {/* Flower and quote container */}
            <div 
              className={`flex flex-col items-center cursor-pointer transition-all duration-500 ${
                flowerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              onClick={handleFlowerClick}
            >
              {/* Flower */}
              <div className="w-40 h-56 md:w-52 md:h-72 animate-float mb-4">
                <FlowerSVG type={currentFlower.type} />
              </div>
              
              {/* Flower label */}
              <p className="font-script text-3xl md:text-4xl text-primary mb-1">
                {currentFlower.label}
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground">
                {currentFlower.title}
              </p>
              
              {/* Click hint */}
              {!showQuote && (
                <p className="mt-4 font-body text-sm text-primary/70 animate-pulse-soft">
                  ✨ Click to reveal ✨
                </p>
              )}
            </div>
            
            {/* Quote card */}
            {showQuote && (
              <div className="mt-8 w-full max-w-lg opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-xl border border-blush/40">
                  <p className="text-xs text-muted-foreground font-body mb-2 uppercase tracking-wide">
                    {currentFlower.meaning}
                  </p>
                  <p className="font-body text-lg md:text-xl text-foreground italic leading-relaxed">
                    "{currentFlower.quote}"
                  </p>
                </div>
                
                {!isLastFlower && (
                  <p className="text-center mt-4 font-body text-sm text-muted-foreground animate-pulse-soft">
                    Next flower blooming...
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Completion view with final message and photo */
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full justify-center opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            {/* Final message */}
            <div className="flex-1 max-w-xl">
              <div className="bg-card/90 backdrop-blur-sm rounded-3xl px-6 md:px-10 py-8 shadow-2xl border border-blush/40">
                <div className="mb-6 flex justify-center gap-2 flex-wrap">
                  <span className="text-2xl">🌹</span>
                  <span className="text-2xl">🌻</span>
                  <span className="text-2xl">🌷</span>
                  <span className="text-2xl">🌼</span>
                  <span className="text-2xl">🌺</span>
                  <span className="text-2xl">🌸</span>
                </div>
                
                <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-3 text-center">
                  I could have given you flowers that fade in a few days. 
                </p>
                <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-6 text-center">
                  So instead, I chose ones that hold pieces of you.
                </p>
                <p>
                  <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-6 text-center">
                  Dekh tui amr life er best person till now,
                  Amr feel hoy tui special ar amr feeling kokhono vul hoy na.
                  Soo tor jonno sob korbo pujo path sob
                   korbo tor ja pochhondo sob korbo just believe me.
                  And tor ei sarir photo ta amr most favourite tai diyechi, best photo r emnitew sari te hebiiii lge tokeee hehehe,
                  tor sarir photoo dekhe ami blush kori, ssei swaraswati pujor photo ta ami rat e 10 min dhore takiye blush korchi,
                  bal raj ta ese distrub kore dilo.
                  Eii bolar chilo tumi amr jonno onek special tumi bisas koro na koro but ami biswas korabo tension nei.
                  </p>
                </p>
                <p className="font-script text-2xl md:text-3xl text-primary text-center leading-relaxed">
                  Happy Flower Day samadritaa my babyyy, my cutieeepieeee
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <span className="text-xl animate-pulse-soft">💐</span>
                  <span className="text-xl animate-pulse-soft" style={{ animationDelay: '0.3s' }}>💕</span>
                  <span className="text-xl animate-pulse-soft" style={{ animationDelay: '0.6s' }}>💐</span>
                </div>
              </div>
            </div>
            
            {/* Photo section on the right */}
            <div className="flex-1 max-w-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blush/30 animate-glow">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                  {/* Replace this src with your actual image */}
                  <img 
                    src="/sam.jpg" 
                    alt="My love" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-2xl text-center text-primary mt-4">
                  You 💕
                </p>
                <p className="font-body text-sm text-center text-muted-foreground mt-1">
                  The most beautiful flower in my garden
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <p className="mt-12 font-body text-sm text-muted-foreground">
          Made with love, just for you samadrita♡
        </p>
      </div>
    </div>
  );
};

export default GardenPage;
