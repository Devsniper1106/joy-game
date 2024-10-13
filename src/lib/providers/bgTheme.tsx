'use client'
import { useTheme } from "next-themes"


export const BgTheme = ({children,
}: Readonly<{
  children: React.ReactNode}>) =>{
    const {theme}=useTheme()
    return(
    <div className={`${theme==='dark'?'bg-gradient-to-b from-[#364AB3] to-[#00020D]':' bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]'}`}>
        {children}
    </div>
    )
}