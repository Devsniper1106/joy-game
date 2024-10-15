'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import faHome from '../../public/gamejoy-logo.svg';
import { useTheme } from 'next-themes';

const HomeButton: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" passHref>
      <button className="flex items-center p-4 cursor-pointer border-none bg-transparent text-[48px] dark:text-white text-[#0C4A6E]">
        <Image src={faHome} alt="Home" className="mr-6 h-[72px] w-[72px]" width={72} height={72} />
        <span className=" transition-colors duration-300 max-sm:hidden">Home</span>
      </button>
    </Link>
  );
};

export default HomeButton;
