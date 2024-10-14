import { ThemeToggle } from '@components/theme-toggle'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import HomeButton from '../Homebutton'
import { Menu } from '../ui/menu'

export default function Header() {
  return (
    <header className="sticky flex justify-between py-1 px-8  items-center z-40 w-full h-20">
      <HomeButton />
      <ThemeToggle />
      <Menu />
    </header>
  )
}
