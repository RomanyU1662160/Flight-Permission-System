import React from 'react';
import { CheckCircle } from 'lucide-react';
// this will serve as the child component for the layout in the parallel layout

function DefaultLayout({ params }: { params: any }) {
  console.log('params:::>>>', params);
  return (
    <div className='flex justify-center gap-3 items-baseline'>
      <h1 className='text-center text-3xl text-gray-800 font-bold mt-10 mb-5'>
        Details of flight
      </h1>
      <CheckCircle className='text-green-500' size={'40px'} />
    </div>
  );
}

export default DefaultLayout;
