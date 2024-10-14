'use client'
import { useTheme } from "next-themes"
import { useEffect } from "react";


export const BgTheme = ({children,
}: Readonly<{
  children: React.ReactNode}>) =>{
    const {theme}=useTheme()
      // Use useEffect to update local storage whenever the theme changes
  useEffect(() => {
    // localStorage.setItem('theme', theme);
  }, [theme]);
    return(
    <div className="dark:bg-gradient-to-b dark:from-[#364AB3] dark:to-[#00020D] bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]">
        {children}
    </div>
    )
}