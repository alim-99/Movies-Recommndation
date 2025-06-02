'use client';

import { ItemData } from '@/data';
import { useGenres } from '@/context/GenresContext';
import React from 'react';

const GenresResults = (item: ItemData) => {
  const { genres, isLoading, error } = useGenres();
  
  if (isLoading) {
    return <div className="animate-pulse h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-20"></div>;
  }

  if (error) {
    return null;
  }
  
  return (
    <div>
      {item.genre_ids.length > 0 ? (
        genres
          .filter((genre) => item.genre_ids.includes(genre.id))
          .map((genre) => (
            <span key={genre.id} className="inline-block mt-2 px-2 py-1 ml-2 text-sm bg-slate-400 dark:bg-slate-700 text-indigo-600 dark:text-indigo-500 rounded-full">
              {genre.name}
            </span>
          ))
      ) : (
        <span className="inline-block px-2 py-1 ml-2 text-sm bg-indigo-400 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-400 rounded-full">
          No genres available
        </span>
      )}
    </div>
  )
}

export default GenresResults 