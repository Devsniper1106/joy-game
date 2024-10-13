'use client'
import React from 'react';

interface CardProps {
  imageUrl: string;
  gameName: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, gameName }) => {
  return (
    <a 
      href={gameName}
      className="block border border-gray-300 rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 transform hover:scale-105"
    >
      <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
    </a>
  );
};

export default Card;
