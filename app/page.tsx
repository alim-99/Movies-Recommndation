import Hero from '@/components/Hero'
import LoadMore from '@/components/LoadMore'
import Trending from '@/components/Trending'

export default function Home() {

  return (
    <main>
      <section>
      <Hero />
      <Trending />
      </section>
      <LoadMore />
    </main>
  )
}
