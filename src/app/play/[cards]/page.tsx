'use client'
import React, { useEffect, useState, useRef } from 'react'
import Card from '@/components/ui/card'
import { useTheme } from 'next-themes'
import Header from '@/components/shared/header'
// import { Menu } from '@/components/ui/menu'
import { getGameList } from '@/actions/getGameList'
import { usePathname } from 'next/navigation'
import { TGameItemDto } from '@/lib/types/api/model/game'
import Link from 'next/link'

const Page: React.FC = () => {
  const { theme } = useTheme()
  const [gameItems, setGameItems] = useState<TGameItemDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const pathName = usePathname()
  const endpoint = pathName.split('/').pop()
  const selectedGameItem = gameItems.find((item) => item.name === endpoint)

  // Create a ref for the iframe
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const fetchGameList = async () => {
      try {
        const response = await getGameList()
        console.log('API Response:', response) // Debugging line
        if (response.success) {
          if (Array.isArray(response.data)) {
            setGameItems(response.data)
          } else {
            setError('Game list is not in expected format.')
          }
        } else {
          setError(`Error fetching game list: ${response.code}`)
        }
      } catch (err) {
        setError('An error occurred while fetching the game list.')
        console.error(err) // Log the error for debugging
      } finally {
        setLoading(false)
      }
    }

    fetchGameList()
  }, [])

  if (loading) {
    return (
      <div
        className={`h-screen ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#364AB3] to-[#00020D]'
            : ' bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]'
        }`}
      >
        <div className="h-screen flex items-center justify-center dark:bg-gradient-to-b dark:from-[#364AB3] dark:to-[#00020D] bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]">
          <div className="flex flex-col items-center">
            <div className="loader"></div>
            <p className="mt-4 text-lg text-gray-800 dark:text-white">
              Loading...
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div>{error}</div>
  }
  console.log('theme---->', theme)
  return (
    <div
      className={`h-screen w-screen ${
        theme === 'dark' ? 'text-white' : 'text-[#312E81]'
      }`}
    >
      <div className="max-sm:hidden">
        <Header />
      </div>
      <Link href='/' className="absolute top-1/2 left-0 z-50 overscroll-none sm:hidden">
        <img  className='dark:hidden' src="/lightHomeButton.svg"/>
        <img  className='dark:block hidden' src="/darkHomeButton.svg"/> 
        {/* <Menu width={60} height={60} className="mt-6 mr-1" /> */}
      </Link>
      <div className="absolute w-full z-20 top-0 sm:top-36 inset-0 sm:ml-9 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 lg:flex-row">
        <div className="w-full flex-1 h-[75vh] sm:my-4">
          {selectedGameItem ? (
            <iframe
              ref={iframeRef}
              src={selectedGameItem.link_url}
              className="flex-1 w-full h-full"
              title={selectedGameItem.name}
              // frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <div>No game selected.</div>
          )}
        </div>
        <div className="w-full sm:p-4 overflow-x-auto overflow-y-hidden sm:overflow-hidden sm:overflow-y-auto h-[100px] sm:px-2 sm:h-full sm:w-[280px]">
          <div className="flex align-middle flex-row flex-nowrap  gap-2 sm:gap-4 sm:p-8  sm:flex-col sm:w-full sm:h-fit">
            {gameItems.map((card) => (
              <div key={card.id} className=" ">
                <Card
                  icon_url={card.icon_url}
                  name={card.name}
                  className="max-sm:h-[80px] max-sm:w-[80px] aspect-square"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
