import React from 'react';

const IntroFlower: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 300"
      className="w-48 h-72 md:w-64 md:h-96 animate-bloom"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M100 280 Q95 220, 100 160"
        stroke="hsl(120, 30%, 50%)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Leaves */}
      <ellipse
        cx="85"
        cy="220"
        rx="20"
        ry="8"
        fill="hsl(120, 25%, 55%)"
        transform="rotate(-30, 85, 220)"
      />
      <ellipse
        cx="115"
        cy="240"
        rx="18"
        ry="7"
        fill="hsl(120, 25%, 60%)"
        transform="rotate(25, 115, 240)"
      />
      
      {/* Rose petals - layered */}
      {/* Outer petals */}
      <ellipse
        cx="70"
        cy="120"
        rx="30"
        ry="40"
        fill="hsl(340, 60%, 75%)"
        transform="rotate(-30, 70, 120)"
      />
      <ellipse
        cx="130"
        cy="120"
        rx="30"
        ry="40"
        fill="hsl(340, 60%, 75%)"
        transform="rotate(30, 130, 120)"
      />
      <ellipse
        cx="100"
        cy="85"
        rx="28"
        ry="38"
        fill="hsl(340, 65%, 78%)"
      />
      <ellipse
        cx="75"
        cy="140"
        rx="25"
        ry="35"
        fill="hsl(340, 55%, 72%)"
        transform="rotate(-45, 75, 140)"
      />
      <ellipse
        cx="125"
        cy="140"
        rx="25"
        ry="35"
        fill="hsl(340, 55%, 72%)"
        transform="rotate(45, 125, 140)"
      />
      
      {/* Middle petals */}
      <ellipse
        cx="85"
        cy="110"
        rx="22"
        ry="30"
        fill="hsl(340, 70%, 70%)"
        transform="rotate(-20, 85, 110)"
      />
      <ellipse
        cx="115"
        cy="110"
        rx="22"
        ry="30"
        fill="hsl(340, 70%, 70%)"
        transform="rotate(20, 115, 110)"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="20"
        ry="28"
        fill="hsl(340, 75%, 68%)"
      />
      
      {/* Inner petals */}
      <ellipse
        cx="92"
        cy="115"
        rx="15"
        ry="22"
        fill="hsl(340, 80%, 65%)"
        transform="rotate(-10, 92, 115)"
      />
      <ellipse
        cx="108"
        cy="115"
        rx="15"
        ry="22"
        fill="hsl(340, 80%, 65%)"
        transform="rotate(10, 108, 115)"
      />
      
      {/* Center spiral */}
      <circle
        cx="100"
        cy="115"
        r="12"
        fill="hsl(340, 85%, 60%)"
      />
      <circle
        cx="100"
        cy="115"
        r="6"
        fill="hsl(340, 90%, 55%)"
      />
    </svg>
  );
};

export default IntroFlower;
