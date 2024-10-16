'use client'
import { useTheme } from "next-themes"


export const BgTheme = ({children,
}: Readonly<{
  children: React.ReactNode}>) =>{
    const {theme}=useTheme()
    console.log("📞",theme)
    return(
    <div className="dark:bg-gradient-to-b dark:from-[#364AB3] dark:to-[#00020D] bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]">
        {children}
    </div>
    )
}