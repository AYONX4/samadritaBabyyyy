import React from 'react';
import IntroFlower from './IntroFlower';
import FloatingPetals from './FloatingPetals';

interface IntroPageProps {
  onEnter: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-romantic-gradient flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      <FloatingPetals />
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        {/* Blooming flower */}
        <div className="mb-8">
          <IntroFlower />
        </div>
        
        {/* Greeting text */}
        <div className="text-center space-y-6 animate-fade-in-up opacity-0 animation-delay-1000">
          <h1 className="font-script text-5xl md:text-7xl text-foreground">
            For You, My Babyyyy
          </h1>
          
          <div className="space-y-4 max-w-xl mx-auto">
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              A small gift from my heart to yours...
            </p>
            
            <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed opacity-0 animate-fade-in-up animation-delay-1500" style={{ animationFillMode: 'forwards' }}>
              There are so many things I want to tell you, but words never feel enough. 
              So instead, I built something that holds the feelings I can't always say out loud.
            </p>
            
            <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed opacity-0 animate-fade-in-up animation-delay-2000" style={{ animationFillMode: 'forwards' }}>
              You are the best thing I have in 2025/26.
              Every moment with you feels like a gift I didn't know I was waiting for.
            </p>
            
            <p className="font-script text-2xl md:text-3xl text-black opacity-0 animate-fade-in-up" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
              This garden is for you — because you deserve more than just one flower.
            </p>
          </div>
        </div>
        
        {/* Enter button */}
        <button
          onClick={onEnter}
          className="mt-10 opacity-0 animate-fade-in-up group"
          style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
        >
          <span className="font-script text-2xl md:text-3xl text-primary animate-pulse-soft inline-block">
            Click here to see your garden
          </span>
          <div className="h-0.5 w-0 group-hover:w-full bg-primary/50 transition-all duration-500 mx-auto mt-1" />
        </button>
        
        {/* Heart decoration */}
        <div className="mt-8 flex gap-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}>
          <span className="text-2xl animate-pulse-soft">💕</span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream/50 to-transparent" />
    </div>
  );
};

export default IntroPage;
