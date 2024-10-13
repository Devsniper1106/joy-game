'use client'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Menu = () => {
  const [show, setShow] = useState<boolean>(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="fixed top-12 right-8 sm:hidden">
        <img
          src="menu.svg"
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        {show && (
          <div
            className="fixed top-28 right-3 flex flex-col gap-2 text-[#0C4A6E] text-[18px] bg-[#DEE3FD] rounded-sm p-2"
            onClick={() => setShow(false)}
          >
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => router.replace('/')}
            >
              <img src="home.svg" />
              <span>Home</span>
            </div>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <img src="light.svg" />
              ) : (
                <img src="moon.svg" />
              )}
              <span>{theme !== 'dark' ? 'Dark' : 'Light'}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
