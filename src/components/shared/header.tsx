import { ThemeToggle } from '@components/theme-toggle'
import HomeButton from '../Homebutton'
// import { Menu } from '../ui/menu'

export default function Header() {
  return (
    <header className="sticky flex justify-between py-1 md:px-8 px-4 items-center z-40 w-full md:h-20 h-16">
      <HomeButton />
      <ThemeToggle />
      {/* <Menu width={40} height={40} /> */}
    </header>
  )
}
