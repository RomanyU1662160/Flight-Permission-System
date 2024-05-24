'use client';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type YearsMenuProps = {
  years: number[];
};

function YearsMenu({ years }: YearsMenuProps) {
  const pathName = usePathname();
  const flightSlug = pathName.split('/')[2];
  return (
    <div>
      <div className='space-y-1'>
        <h2 className='text-sm font-bold'>
          select a year to view flight history
        </h2>
      </div>
      <Separator className='' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        {years.map((year) => {
          return (
            <>
              <Link key={year} href={`/flight-history/${flightSlug}/${year}`}>
                {year}
              </Link>
              <Separator className='bg-black' orientation='vertical' />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default YearsMenu;
