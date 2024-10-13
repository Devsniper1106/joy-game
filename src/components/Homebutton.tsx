'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import faHome from '../../public/gamejoy-logo.svg';
import { useTheme } from 'next-themes';

const HomeButton: React.FC = () => {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState<string>('text-blue-600');

  // Update text color based on theme
  useEffect(() => {
    setTextColor(theme === 'dark' ? 'text-white' : 'text-blue-600');
  }, [theme]);

  return (
    <Link href="/" passHref>
      <button className="flex items-center p-4 cursor-pointer border-none bg-transparent text-[48px]">
        <Image src={faHome} alt="Home" className="mr-6 h-[72px] w-[72px]" width={72} height={72} />
        <span className={`${textColor} transition-colors duration-300 max-sm:hidden`}>Home</span>
      </button>
    </Link>
  );
};

export default HomeButton;
