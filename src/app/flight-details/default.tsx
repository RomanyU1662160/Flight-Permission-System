import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

// this will serve as the child component for the layout in the parallel layout

function DefaultLayout({ params }: { params: any }) {
  return (
    <div className='flex justify-end mr-10'>
      <Link href='/'> View full History </Link>
    </div>
  );
}

export default DefaultLayout;
