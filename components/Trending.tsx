import { getAll } from "@/lib/actions/movies.actions"
import Image from "next/image"

interface TrendingItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type: string;
}

const Trending = async () => {
  const res = await getAll(process.env.TRENDING!);

  return (
    <section className='py-10 container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-600">Trending Now</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {res.results.map((item: TrendingItem) => (
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
                {item.media_type.charAt(0).toUpperCase() + item.media_type.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trending
