'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from '../../public/moonicon.svg';
import SunIcon from '../../public/sunicon.svg';
import Image from 'next/image';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
	// 	setMounted(true);
	// }, []);

	// if (!mounted) {
	// 	return null;
	// }

  return (
    
          <button
            className="p-2 max-sm:hidden"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
