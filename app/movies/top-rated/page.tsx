'use client';
import React, { useState, useEffect } from 'react';
import ResultsData from '@/components/ResultsData';
import { ItemData } from '@/data';
import { getTopratedMovies } from '@/lib/actions/movies.actions';
import LoadMore from '@/components/LoadMore';

const Page = () => {
  const [movies, setMovies] = useState<ItemData[]>([]);
  const [page, setPage] = useState(1);

  const loadMovies = async (pageNumber: number) => {
    const res = await getTopratedMovies(pageNumber);
    setMovies((prevMovies) => [...prevMovies, ...res.results]);
  };

  // Load initial movies
  useEffect(() => {
    loadMovies(page);
  }, [page]);

  const loadMoreMovies = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <main className='flex flex-col items-center justify-center py-10 container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-semibold text-indigo-500 mb-10'>Top-Rated Movies</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {movies.map((item: ItemData, index) => (
        <ResultsData key={`${item.id}-${index}`} {...item} />
        ))}
      </div>

      <LoadMore onLoadMore={loadMoreMovies} />
    </main>
  )
}

export default Page