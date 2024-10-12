'use client'
import React from 'react';

interface CardProps {
  imageUrl: string;
  detailUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, detailUrl }) => {
  return (
    <a 
      href={detailUrl}
      className="block border border-gray-300 rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 transform hover:scale-105"
    >
      <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
    </a>
  );
};

export default Card;
