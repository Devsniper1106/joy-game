'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/components/ui/card'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { TGameItemDto } from '@/lib/types/api/model/game'
import { getGameList } from '@/actions/getGameList'
import { useTheme } from 'next-themes'

export default function Home() {
  const [gameItems, setGameItems] = useState<TGameItemDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme } = useTheme()

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
  console.log('theme---->', theme)
  // console.log('length---->', gameItems)
  if (loading) {
    return (
      <div className="h-screen dark:bg-gradient-to-b dark:from-[#364AB3] dark:to-[#00020D] bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]">
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

  return (
    <div className="dark:bg-gradient-to-b dark:from-[#364AB3] dark:to-[#00020D] bg-gradient-to-b from-[#E6EAFF] to-[#8696E7]">
      <Header />
      <main className="md:px-[120px] md:py-[58px] px-[12px] py-[12px] ">
        <div className="grid w-full h-full grid-flow-dense grid-cols-3 lg:gap-10 lg:w-4/5 lg:mx-auto gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7">
          {gameItems.map((card) => (
            <div
              key={card.id}
              className={`${
                card.is_hot
                  ? 'col-span-2 row-span-2 '
                  : 'col-span-1 row-span-1 '
              }`}
            >
              <Card
                className="aspect-square"
                icon_url={card.icon_url}
                name={card.name}
              />
            </div>
          ))}
          {/* Additional empty grid cells can go here if needed */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
