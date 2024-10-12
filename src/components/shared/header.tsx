import { ThemeToggle } from '@components/theme-toggle'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import HomeButton from '../Homebutton'

export default function Header() {
  return (
    <header className="flex justify-between py-6 px-8    z-40 w-full  ">
      <HomeButton/>
      <ThemeToggle />
    </header>
  )
}
