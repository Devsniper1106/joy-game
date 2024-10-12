'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@components/ui/tooltip';

import MoonIcon from '../../public/moonicon.svg';
import SunIcon from '../../public/sunicon.svg';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <button
            className="p-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Switch theme"
          >
            {theme !== 'dark' ? (
              <Image src={SunIcon} alt="Switch to light theme" className="w-12 h-12  " />
            ) : (
              <Image src={MoonIcon} alt="Switch to dark theme" className="w-12 h-12 " />
            )}
            <span className="sr-only">Switch Theme</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Switch Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
