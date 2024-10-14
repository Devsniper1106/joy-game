'use client'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { HomeIcon, MenuIcon, ThemeIcon } from './icon'

export const Menu = () => {
  const [show, setShow] = useState<boolean>(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const accountBtn = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the clicked element is outside the dropdown menu
    if (
      accountBtn.current &&
      !accountBtn.current.contains(event.target as Node)
    ) {
      setShow(false)
    }
  }

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside)
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative sm:hidden flex flex-col" ref={accountBtn}>
      <button onClick={() => setShow(!show)}>
        <MenuIcon />
      </button>
      {show && (
        <div
          className={`absolute top-16 -right-2 w-28 flex flex-col gap-2 ${
            theme === 'dark'
              ? 'text-white bg-[#1E2854]'
              : 'text-[#0C4A6E] bg-[#CEDAED]'
          } text-[18px] rounded-sm p-2 z-30`}
        >
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <HomeIcon />
            <span>Home</span>
          </div>
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <ThemeIcon />
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </div>
        </div>
      )}
    </div>
  )
}
