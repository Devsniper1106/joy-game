// import { useParams } from "next/navigation"
// import { useEffect } from "react";

// const cardId = useParams();
// useEffect get(api/v1, cardId);
'use client'
import React from 'react'
import Card from '@/components/ui/card'
import cardData from '../../../../public/data/cardData.json'

import Image from 'next/image'
import Buttonicon from '../../../../public/buttonIcon.svg'
import { useTheme } from 'next-themes'
const page = () => {
  const {theme}=useTheme()
  return (
    <div className="px-8">
      <div className="flex flex-col justify-between  gap-8 lg:flex-row">
        <div className="w-full  py-8 px-10">
          <div className={`flex h-[300px] max-w-[800px] gap-5 py-[45px] px-[66px] ${theme==='dark'?'bg-[#0206177A]':' bg-[#9FB0FD7A]'}
           rounded-[36px]`}>
            <Card
              imageUrl="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              gameName=""
            ></Card>
            <div className='p-6'>
              <div className=" text-[32px] mb-8">Game Name</div>
              <button className={`flex align-middle px-12 py-3 rounded-[36px] outline-4 outline-[#A3E635] ${theme==='dark'?'bg-[#6366F14D]':' bg-[#9FB0FD7A]'}`}>
                <Image
                  alt="button"
                  className="place-items-center  h-[36px] mt-2 w-[36px]"
                  src={Buttonicon}
                />
                <div className="text-[32px] font-bold ml-8 ">Play</div>
              </button>
            </div>
          </div>
        </div>
        <div className=" px-3 py-3 max-w-[600px] min-w-200">
          <div className="text-[28px] pb-12">
            Enjoy Other Games
          </div>
          <div className="grid grid-cols-3 grid-flow-dense gap-x-8 gap-y-4 lg:grid-cols-2  xl:grid-cols-3 ">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={` row-span-${card.rowNum} col-span-${card.colNum}`}
              >
                <Card imageUrl={card.imageUrl} gameName={card.gameName} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
