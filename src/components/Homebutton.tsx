'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import faHome from '../../public/gamejoy-logo.svg'

const HomeButton: React.FC = () => {
  return (
    <Link href="/" passHref>
      <button className="flex items-center cursor-pointer border-none bg-transparent text-[48px] dark:text-white text-[#0C4A6E]">
        <div className="flex items-center justify-center md:w-20 md:h-20 w-14 h-14">
          <Image src={faHome} alt="Home" className="object-cover" />
        </div>
        <span className="transition-colors duration-300 max-sm:hidden ml-4">
          Home
        </span>
      </button>
    </Link>
  )
}

export default HomeButton
