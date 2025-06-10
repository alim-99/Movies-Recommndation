'use client';

import { useEffect, useState } from 'react';
import { searchAll } from '@/lib/utils';
import ResultsData from '@/components/ResultsData';
import { ItemData } from '@/data';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState<ItemData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const searchResults = await searchAll(query);
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl font-semibold text-indigo-500 mb-10'>
        Search Results for: {query}
      </h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {results.length > 0 ? (
            results.map((item: ItemData, index: number) => (
              <ResultsData key={`${item.id}-${index}`} {...item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              {query ? 'No results found' : 'Enter a search term to begin'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;