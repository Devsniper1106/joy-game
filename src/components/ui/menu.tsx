// 'use client'
// import { useTheme } from 'next-themes'
// import { useRouter } from 'next/navigation'
// import { useEffect, useRef, useState } from 'react'
// import { HomeIcon, MenuIcon, ThemeIcon } from './icon'

// export type IMenuProps = {
//   width?: number
//   height?: number
//   className?: string | undefined
// }
// export const Menu = ({ className, ...rest }: IMenuProps) => {
//   const [show, setShow] = useState<boolean>(false)
//   const router = useRouter()
//   const { theme, setTheme } = useTheme()

//   const accountBtn = useRef<HTMLDivElement | null>(null)

//   const handleClickOutside = (event: MouseEvent) => {
//     // Check if the clicked element is outside the dropdown menu
//     if (
//       accountBtn.current &&
//       !accountBtn.current.contains(event.target as Node)
//     ) {
//       setShow(false)
//     }
//   }

//   useEffect(() => {
//     // Add event listener for clicks
//     document.addEventListener('mousedown', handleClickOutside)
//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   return (
//     <div
//       className={`relative sm:hidden flex flex-col ${className}`}
//       ref={accountBtn}
//     >
//       <button className="relative" onClick={() => setShow(!show)}>
//         <MenuIcon {...rest} />
//         {show && (
//           <div
//             className="absolute top-10 -right-2 w-28 flex flex-col gap-2 
//            dark:text-white dark:bg-[#1E2854]/90 text-[#0C4A6E] bg-[#CEDAED]/90 text-[18px] rounded-sm p-2 z-30"
//           >
//             <div
//               className="flex gap-2 cursor-pointer"
//               onClick={() => router.push('/')}
//             >
//               <HomeIcon />
//               <span>Home</span>
//             </div>
//             <div
//               className="flex gap-2 cursor-pointer"
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//             >
//               <ThemeIcon />
//               <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
//             </div>
//           </div>
//         )}
//       </button>
//     </div>
//   )
// }
