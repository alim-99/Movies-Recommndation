'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface LoadMoreProps {
  onLoadMore: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView, onLoadMore]);

  return (
    <section className='flex justify-center items-center w-full'>
      <div ref={ref}>
        <Image
          src="/Spinner@1x-1.0s-200px-200px.svg"
          alt="spinner"
          width={56}
          height={56}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default LoadMore;
