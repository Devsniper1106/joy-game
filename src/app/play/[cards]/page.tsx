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
  const { theme } = useTheme()
  const name = 'alpha'
  return (
    <div
      className={`h-[100vh] w-screen   ${
        theme === 'dark' ? 'text-white' : 'text-[#312E81]'
      }`}
    >
      <div className="max-sm:hidden">
        <Header />
      </div>
      <div className="absolute top-4 right-4 z-50">
        <Menu />
      </div>
      <div className="absolute w-full top-0 sm:top-36 inset-0 sm:ml-9 flex flex-col sm:flex-row  justify-between gap-4 sm:gap-8 lg:flex-row ">
        <div className="w-full flex-1 h-[75vh] bg-black sm:my-4">fsdsdf</div>
        <div className=" w-full sm:p-4   overflow-x-scroll overflow-y-hidden sm:overflow-hidden sm:overflow-y-scroll h-[110px]  sm:px-2  sm:h-full sm:w-[280px] ">
          <div className="flex align-middle flex-row h-[80px] w-[80px] gap-2 sm:gap-4 sm:p-8 flex-nowrap sm:flex-col sm:w-full sm:h-fit">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`h-full aspect-square sm:w-full sm:h-auto row-span-${card.rowNum} col-span-${card.colNum}`}
              >
                <Card icon_url={card.icon_url} name={card.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
