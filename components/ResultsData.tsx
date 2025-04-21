import React from 'react';
import Image from 'next/image';
import { movieItemData } from '@/data';

const ResultsData = (item: movieItemData) => {
  return (
    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-[300px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={(item.title || item.name || 'Media poster')}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 truncate">
          {item.title || item.name}
        </h3>
        <span className="inline-block px-2 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
          {(item.media_type || 'movie').charAt(0).toUpperCase() + (item.media_type || 'movie').slice(1)}
        </span>
      </div>
    </div>
  )
}

export default ResultsData
