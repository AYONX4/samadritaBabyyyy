import React, { useState } from 'react';
import IntroPage from '@/components/IntroPage';
import GardenPage from '@/components/GardenPage';

const Index: React.FC = () => {
  const [showGarden, setShowGarden] = useState(false);

  const handleEnter = () => {
    setShowGarden(true);
  };

  return (
    <div className="transition-all duration-700">
      {!showGarden ? (
        <IntroPage onEnter={handleEnter} />
      ) : (
        <GardenPage />
      )}
    </div>
  );
};

export default Index;
