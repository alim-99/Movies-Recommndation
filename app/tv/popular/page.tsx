'use client';
import React, { useState, useEffect } from 'react';
import ResultsData from '@/components/ResultsData';
import { ItemData } from '@/data';
import { getPopularTv } from '@/lib/actions/tv.actions';
import LoadMore from '@/components/LoadMore';
import { getTvGenres } from '@/lib/actions/geners.actions';

const Page = () => {
  const [tv, setTV] = useState<ItemData[]>([]);
  const [page, setPage] = useState(1);
  const [geners, setGenres] = useState<{ id: number; name: string }[]>([]);

  const loadtv = async (pageNumber: number) => {
    const res = await getPopularTv(pageNumber);
    console.log(res.results.poster_path);
    setTV((prevtv) => [...prevtv, ...res.results]);
  };

  // Load initial tv
  useEffect(() => {
    loadtv(page);
  }, [page]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genreList = await getTvGenres();
      setGenres(genreList);
    };
    fetchGenres();
  }, []);

  const loadMoretv = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadtv(nextPage);
  };

  return (
    <main className='flex flex-col items-center justify-center py-10 container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-semibold text-indigo-700 dark:text-indigo-500 mb-10'>Popular Shows</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {tv.map((item: ItemData, index) => (
        <ResultsData key={`${item.id}-${index}`} {...item} genres={geners} />
        ))}
      </div>

      <LoadMore onLoadMore={loadMoretv} />
    </main>
  );
};

export default Page
