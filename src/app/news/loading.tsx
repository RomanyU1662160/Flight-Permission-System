import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ArticleSkeleton from '@/components/custom/skeleton/ArticleSkeleton';

function loading() {
  const mockArray = Array(6).fill(0);
  console.log('mockArray', mockArray);
  return (
    <div className='grid grid-cols-3 gap-2'>
      {mockArray.map((_, i) => {
        return <ArticleSkeleton key={i} />;
      })}
    </div>
  );
}

export default loading;
