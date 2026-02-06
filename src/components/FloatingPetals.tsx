import React from 'react';

const FloatingPetals: React.FC = () => {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    size: 8 + Math.random() * 12,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-40"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            animation: `petal-fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.5}
            viewBox="0 0 20 30"
            fill="none"
          >
            <ellipse
              cx="10"
              cy="15"
              rx="8"
              ry="12"
              fill="hsl(340, 60%, 80%)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
