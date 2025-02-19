import React from 'react';

const Gauge = ({ value, max, color, unit }) => {
    const strokeDasharray = (value / max) * 100; // Calculate stroke dasharray percentage
    const rotateClass = color === 'orange' ? 'rotate-180' : 'rotate-[135deg]';

    return (
        <div className="relative w-40 h-40">
            <svg className={`${rotateClass} w-full h-full`} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            {/* Background Circle (Gauge) */}
            <circle cx="18" cy="18" r="16" fill="none" className={`stroke - current text-${color}-200`} strokeWidth="1" strokeDasharray="75 100" />
            {/* Gauge Progress */}
            <circle cx="18" cy="18" r="16" fill="none" className={`stroke - current text-${color}-600`} strokeWidth="2" strokeDasharray={`${strokeDasharray} 100`} />
        </svg>
      {/* Value Text */ }
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-4xl font-bold text-purple-600">{value}</span>
        <span className={`text - ${color}-600 block`}>{unit}</span>
      </div >
    </div >
  );
};

export default Gauge;