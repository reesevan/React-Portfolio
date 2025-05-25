// components/Logo.jsx
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-bounce-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Paintbrush */}
        <path
          d="M15 45C15 42 19 39 22 39C25 39 27 41 27 44C27 47 25 49 22 49C19 49 15 48 15 45Z"
          fill="#3B82F6"
        />
        <path
          d="M23 39L45 17"
          stroke="#1E40AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Keyboard */}
        <rect x="30" y="30" width="28" height="16" rx="2" fill="#1E3A8A" />
        <circle cx="34" cy="34" r="1.5" fill="white" />
        <circle cx="38" cy="34" r="1.5" fill="white" />
        <circle cx="42" cy="34" r="1.5" fill="white" />
        <circle cx="46" cy="34" r="1.5" fill="white" />
        <circle cx="50" cy="34" r="1.5" fill="white" />
        <circle cx="34" cy="38" r="1.5" fill="white" />
        <circle cx="38" cy="38" r="1.5" fill="white" />
        <circle cx="42" cy="38" r="1.5" fill="white" />
        <circle cx="46" cy="38" r="1.5" fill="white" />
        <circle cx="50" cy="38" r="1.5" fill="white" />
      </svg>
    </div>
  );
};

export default Logo;
