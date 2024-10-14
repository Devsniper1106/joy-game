'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/components/ui/card'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { TGameItemDto } from '@/lib/types/api/model/game'
import { getGameList } from '@/actions/getGameList'

export default function Home() {
  const [gameItems, setGameItems] = useState<TGameItemDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGameList = async () => {
      const response = await getGameList()
      if (response.success) {
        setGameItems(response.data)
      } else {
        setError(`Error fetching game list: ${response.code}`)
      }
      setLoading(false)
    }

    fetchGameList()
  }, [])
  console.log('length---->', gameItems)
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <Header />
      <main className="md:px-[84px] md:py-[58px] px-[28px] py-[24px]">
        <div className="grid w-full h-full grid-flow-dense grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7">
          {gameItems.map((card) => (
            <div
              key={card.id}
              className={`${
                card.is_hot ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <Card icon_url={card.icon_url} name={card.name} />
            </div>
          ))}
          {/* Additional empty grid cells can go here if needed */}
        </div>
      </main>
      <Footer />
    </div>
  )
}
