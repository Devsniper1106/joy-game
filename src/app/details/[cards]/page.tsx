// import { useParams } from "next/navigation"
// import { useEffect } from "react";

// const cardId = useParams();
// useEffect get(api/v1, cardId);
'use client'
import React from 'react'
import Card from '@/components/ui/card'
import cardData from '../../../../public/data/cardData.json'

import Image from 'next/image'
import ButtoniconSun from '../../../../public/buttonIconSun.svg'
import ButtoniconMoon from '../../../../public/buttonIconMoon.svg'
import { useTheme } from 'next-themes'
import Link from 'next/link'


const page = () => {
  const {theme}=useTheme()
  const gameName="alpha"
  return (
    <div className={`px-8 ${theme==='dark'? 'text-white' :'text-[#312E81]'}`}>
      <div className="flex flex-col justify-between gap-4 sm:gap-8 lg:flex-row w-full">
        <div className="w-full ">
          <div className={`flex sm:h-[300px]  lg:min-w-[600px] sm:max-w-[800px] gap-5  px-[15px] py-[31px] sm:py-[45px] sm:px-[66px] ${theme==='dark'?'bg-[#0206177A]':' bg-[#9FB0FD7A]'}
           rounded-[36px]`}>
            <Card
              imageUrl="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              gameName=""
            ></Card>
            <div className='w-1/2'>
              <div className="font-normal text-[20px] sm:text-[32px] mb-8">Game Name</div>
              <Link href={`/play/${gameName}`} className={`flex  items-center px-4 sm:px-12 py-3 gap-2 sm:gap-6 rounded-[36px] outline-4 outline-[#A3E635] ${theme==='dark'?'bg-[#6366F14D]':' bg-[#9FB0FD7A]'}`}>
                <Image
                  alt="button"
                  className="place-items-center  sm:h-[36px]  sm:w-[36px]"
                  src={theme==='dark'?ButtoniconMoon:ButtoniconSun}
                />
                <div className="font-extrabold text-[20px] sm:text-[32px]  ">Play</div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" px-3 py-3 max-w-[600px] min-w-200">
          <div className=" font-extrabold text-[16px] sm:text-[28px] pb-6 sm:pb-12">
            Enjoy Other Games
          </div>
          <div className="grid grid-cols-3 grid-flow-dense gap-x-3 gap-y-2 sm:gap-x-8 sm:gap-y-4 lg:grid-cols-2  xl:grid-cols-3 ">
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
