'use client'
import { getGameList } from '@/actions/getGameList'
import Card from '@/components/ui/card'
import { TGameItemDto } from '@/lib/types/api/model/game'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaGamepad } from 'react-icons/fa'

const Page = () => {
  const [gameItems, setGameItems] = useState<TGameItemDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const pathName = usePathname()
  const endpoint = pathName.split('/').pop()
  const selectedGameItem = gameItems.find((item) => item.name === endpoint)

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
    <div className="md:px-6 px-4 dark:text-white text-[#312E81]]">
      <div className="flex flex-col justify-between gap-4 sm:gap-8 lg:flex-row w-full">
        <div className="w-full">
          <div className="flex sm:h-[300px] min-w-[300px] lg:min-w-[600px] sm:max-w-[800px] gap-5 px-[15px] py-[31px] sm:py-[45px] sm:px-[66px] dark:bg-[#0206177A] bg-[#9FB0FD7A] rounded-[36px]">
            <div className="w-1/2 flex align-middle">
              <Card
                icon_url={`${selectedGameItem?.icon_url}`}
                name={`${selectedGameItem?.name}`}
              />
            </div>
            <div className="py-4 flex flex-col justify-center">
              <div className="font-medium text-[20px] sm:text-[32px] pb-4 sm:py-8">
                {endpoint}
              </div>
              <Link
                href={`/play/${selectedGameItem?.name}`}

                className="flex sm:w-full items-center justify-center px-2 mx-2 sm:px-12 py-1 sm:py-3 gap-2 sm:gap-6 rounded-[36px] border-4 border-amber-500 dark:border-lime-400 bg-[#6366F1]/30"

              >
                <FaGamepad className="text-[20px] sm:text-[32px]" />
                <div className="font-extrabold text-[20px] sm:text-[32px]">
                  Play
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:px-3 px-1 py-3 max-w-[600px] min-w-200 lg:px-3 w-full lg:max-w-[600px]">
          <div className="font-extrabold text-[16px] sm:text-[28px] pb-6 sm:pb-12">
            Enjoy Other Games
          </div>
          <div className="grid grid-cols-3 grid-flow-dense gap-x-3 gap-y-2  md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3">
            {gameItems.map((card) => (
              <div
                key={card.id}
                className={`${
                  card.is_hot
                    ? 'col-span-2 row-span-2'
                    : 'col-span-1 row-span-1'
                }`}
              >
                <Card
                  className="aspect-square"
                  icon_url={card.icon_url}
                  name={card.name}
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
