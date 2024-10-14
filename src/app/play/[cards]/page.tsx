'use client'
import React, { useEffect, useState, useRef } from 'react';
import Card from '@/components/ui/card';
import { useTheme } from 'next-themes';
import Header from '@/components/shared/header';
import { Menu } from '@/components/ui/menu';
import { getGameList } from '@/actions/getGameList';
import { usePathname } from 'next/navigation';
import { TGameItemDto } from '@/lib/types/api/model/game';

const Page: React.FC = () => {
  const { theme } = useTheme();
  const [gameItems, setGameItems] = useState<TGameItemDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pathName = usePathname();
  const endpoint = pathName.split('/').pop();
  const selectedGameItem = gameItems.find((item) => item.name === endpoint);

  // Create a ref for the iframe
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const fetchGameList = async () => {
      const response = await getGameList();
      if (response.success) {
        setGameItems(response.data);
      } else {
        setError(`Error fetching game list: ${response.code}`);
      }
      setLoading(false);
    };

    fetchGameList();
  }, []);

  if (loading) {
    return <div className="h-screen">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`h-screen w-screen ${theme === 'dark' ? 'text-white' : 'text-[#312E81]'}`}>
      <div className="max-sm:hidden">
        <Header />
      </div>
      <div className="absolute top-4 right-4 z-50">
        <Menu />
      </div>
      <div className="absolute w-full top-0 sm:top-36 inset-0 sm:ml-9 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 lg:flex-row">
        <div className="w-full flex-1 h-[75vh] bg-black sm:my-4">
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
        <div className="w-full sm:p-4 overflow-x-auto overflow-y-hidden sm:overflow-hidden sm:overflow-y-auto h-[110px] sm:px-2 sm:h-full sm:w-[280px]">
          <div className="flex align-middle flex-row flex-nowrap  gap-2 sm:gap-4 sm:p-8  sm:flex-col sm:w-full sm:h-fit">
            {gameItems.map((card) => (
              <div key={card.id} className=' '>
                <Card icon_url={card.icon_url} name={card.name} className='max-sm:h-[80px] max-sm:w-[80px]'/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
