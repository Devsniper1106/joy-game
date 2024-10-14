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
import Header from '@/components/shared/header'
import { Menu } from '@/components/ui/menu'


const page = () => {
  const {theme}=useTheme()
  const gameName="alpha"
  return (
    <div className={`h-[100vh] w-screen  ${theme=='dark'? 'text-white' :'text-[#312E81]'}`}>
      <div className='max-sm:hidden'><Header/>
        </div>
      <div className='absolute top-4 right-4 '><Menu/>
        </div>
      <div className="absolute top-36 inset-0 ml-9 flex flex-col md:flex-row  justify-between gap-4 sm:gap-8 lg:flex-row w-full">
        <div className="w-full flex-1 h-[75vh] bg-black my-4">
         fsdsdf
        </div>
        <div className=" w-full p-4 mr-10 overflow-x-hidden overflow-y-scroll overflow-scroll  md:px-2  md:h-full md:w-[280px] ">
          
          <div className="flex flex-row h-full gap-4 w-fit p-8 flex-nowrap md:flex-col md:w-full md:h-fit">
         


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
