"use client";

import Image from 'next/image';
import { ItemData } from '@/data';
import { useState } from 'react';

type Genre = { id: number; name: string };
type ResultsDataProps = ItemData & { genres: Genre[] };

const ResultsData = (props: ResultsDataProps) => {
  const { genre_ids, genres, ...item } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : null;

  return (
    <>
      <div
        key={item.id}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[2/3] w-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={(item.title || item.name || 'Media poster')}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              quality={90}
              priority={false}
              loading="lazy"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+Oj4+Oj4+Oj4+Oj4+Oj4+Oj4+Oj7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-300">No Image Available</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {item.title || item.name}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
            {item.overview || 'No description available.'}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full">
              Rating: {item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
            </span>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              Date: {item.release_date || item.first_air_date || 'N/A'}
            </span>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
              Genres: {(genre_ids ?? []).map((id) => genres.find((g) => g.id === id)?.name)
                .filter(Boolean)
                .slice(0, 2)
                .join(', ') || 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {item.title || item.name}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full">
                  Rating: {item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
                </span>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                  Date: {item.release_date || item.first_air_date || 'N/A'}
                </span>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
                  Genres: {(genre_ids ?? []).map((id) => genres.find((g) => g.id === id)?.name)
                    .filter(Boolean)
                    .slice(0, 2)
                    .join(', ') || 'N/A'}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {item.overview || 'No description available.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ResultsData
