import ResultsData from '@/components/ResultsData';
import { movieItemData } from '@/data';
import { getPopular } from '@/lib/actions/movies.actions'
import React from 'react'

const page = async () => {
  const res = await getPopular(process.env.POPULAR!);

  return (
    <main className='flex flex-col items-center justify-center py-10 container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      {res.results.map((item: movieItemData) => (
          <ResultsData key={item.id} {...item} />
        ))}
      </div>
    </main>
  )
}

export default page
