'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from '../../public/moonicon.svg';
import SunIcon from '../../public/sunicon.svg';
import Image from 'next/image';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  // Set the theme based on local storage when the component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  // Save the theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="p-2 max-sm:hidden"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Switch theme"
    >
     
        <Image src={SunIcon} alt="Switch to dark theme" className="w-12 h-12 dark:hidden " />
     
        <Image src={MoonIcon} alt="Switch to light theme" className="w-12 h-12 hidden dark:block"  />
      
      {/* <span className="sr-only">Switch Theme</span> */}
    </button>
  );
}
