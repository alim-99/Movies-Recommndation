'use client';
import React, { useState, useEffect } from 'react';
import { peopleItemData } from '@/data';
import { getPopularPeople } from '@/lib/actions/actors.actions';
import LoadMore from '@/components/LoadMore';
import Image from 'next/image';

const Page = () => {
  const [people, setPeople] = useState<peopleItemData[]>([]);
  const [page, setPage] = useState(1);

  const loadpeople = async (pageNumber: number) => {
    const res = await getPopularPeople(pageNumber);
    setPeople((prevPeople) => [...prevPeople, ...res.results]);
  };

  // Load initial tv
  useEffect(() => {
    loadpeople(page);
  }, [page]);

  const loadMorePeople = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadpeople(nextPage);
  };

  return (
    <main className='flex flex-col items-center justify-center py-10 container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-semibold text-indigo-700 dark:text-indigo-500 mb-10'>Popular Actors</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {people.map((item: peopleItemData, index) => {
          const imageUrl = item.profile_path ? `https://image.tmdb.org/t/p/w342${item.profile_path}` : null;
          return (
            <div key={`${item.id}-${index}`} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
              <div className="relative h-[300px]">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={item.name || 'Profile picture'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
                    <span className="text-gray-500 dark:text-gray-400">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {item.name}
                </h3>
                {item.known_for.map((item) => (
                  <div key={item.id} className="text-gray-600 dark:text-gray-400 mb-2 ">{item.title}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <LoadMore onLoadMore={loadMorePeople} />
    </main>
  );
};

export default Page