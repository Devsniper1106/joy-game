'use client'
import React from 'react'
import Card from '@/components/ui/card'
import cardData from '../../public/data/cardData.json'

export default function Home() {
  return (
    <main className="md:px-[84px] md:py-[58px] px-[28px] py-[24px] ">
      <div className="grid w-full h-full  grid-flow-dense grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={` row-span-${card.rowNum} col-span-${card.colNum}`}
          >
            <Card imageUrl={card.imageUrl} gameName={card.gameName} />
          </div>
        ))}
      <div className='row-span-2'></div>
      <div className='col-span-2'></div>
      </div>
      
     
    </main>
  )
}
