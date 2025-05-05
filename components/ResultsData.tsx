import React from 'react';
import Image from 'next/image';
import { ItemData } from '@/data';

const ResultsData = (item: ItemData) => {
  const imageUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null;

  return (
    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-[300px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={(item.title || item.name || 'Media poster')}
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
          {item.title || item.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
          {item.overview || 'No description available.'}
        </p>
        <span className="inline-block px-2 py-1 ml-2 text-sm bg-yellow-400 dark:bg-yellow-500 text-yellow-700 dark:text-yellow-300 rounded-full">
          {item.vote_average.toString().slice(0, 3)}
        </span>
      </div>
    </div>
  )
}

export default ResultsData
