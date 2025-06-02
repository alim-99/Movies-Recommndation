import { getAllTrending } from "@/lib/actions/movies.actions"
import { ItemData } from "@/data";
import ResultsData from "./ResultsData";

const Trending = async () => {
  const res = await getAllTrending(1);

  return (
    <section className='py-10 container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-600">Trending Now</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {res.results.map((item: ItemData) => (
          <ResultsData key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Trending
