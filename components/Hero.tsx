import React from 'react'

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center mt-5 w-full h-[60vh] min-h-[400px] bg-cover bg-center bg-[url(/herobg.avif)]'>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/60 dark:bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mb-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-500 mb-4 leading-tight'>
            Welcome to movie recommndation 
          </h2>
          <p className='text-lg sm:text-xl font-medium text-slate-400 max-w-lg'>
            Explore millions of movies, TV shows and actors based on your mood.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
