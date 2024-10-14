'use client';
import React from 'react';

interface CardProps {
  icon_url: string;
  name: string;
  className?: string; // Optional className prop
}

const Card: React.FC<CardProps> = ({ icon_url, name, className }) => {
  return (
    <a
      href={`/details/${name}`}
      className={`block border border-gray-300 rounded-[20px] sm:rounded-[32px] overflow-hidden cursor-pointer transition-transform duration-200 transform hover:scale-105 ${className}`}
    >
      <img src={icon_url} alt={`${name} icon`} className="w-full h-full object-cover" />
    </a>
  );
};

export default Card;
