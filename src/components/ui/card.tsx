'use client'
import React, { useState } from 'react'

interface CardProps {
  icon_url: string
  name: string
}

const Card: React.FC<CardProps> = ({ icon_url, name }) => {
 
  return (
    <a
      href={`/details/${name}`}
      // onClick={()=>{}}
      className="block border border-gray-300  rounded-[20px] sm:rounded-[32px] overflow-hidden cursor-pointer transition-transform duration-200 transform hover:scale-105"
    >
      <img src={icon_url} alt="Card" className="w-full h-full object-cover" />
    </a>
  )
}

export default Card
