'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from '../../public/moonicon.svg';
import SunIcon from '../../public/sunicon.svg';
import Image from 'next/image';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  // const [darkTheme, setDarkTheme] = useState(true);

	// useEffect(() => {
	// 	const theme = localStorage.getItem('theme');
	// 	if (theme === 'dark') {
	// 		setDarkTheme(true);
	// 	} else {
	// 		setDarkTheme(false);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (darkTheme) {
	// 		document.documentElement.classList.add('dark');
	// 		localStorage.setItem('theme', 'dark');
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 		localStorage.setItem('theme', 'light');
	// 	}
	// }, [darkTheme]);

  return (
    
          <button
            className="p-2 max-sm:hidden"
            onClick={() =>{setTheme(theme === 'light' ? 'dark':'light')} }
            aria-label="Switch theme"
          >
            {theme !== 'dark' ? (
              <Image src={SunIcon} alt="Switch to light theme" className="w-12 h-12  " />
            ) : (
              <Image src={MoonIcon} alt="Switch to dark theme" className="w-12 h-12 " />
            )}
            {/* <span className="sr-only">Switch Theme</span> */}
          </button>
      
  );
}
