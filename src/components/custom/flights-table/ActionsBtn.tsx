'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ExternalLink, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

type ActionsBtnProps = {
  flightId: string;
  permissionId: string;
  aircraftId: string;
  airlineId: string;
};

function ActionsDropDown({
  flightId,
  permissionId,
  aircraftId,
  airlineId,
}: ActionsBtnProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className='border-b-2 flex justify-between'>
          <Link href={`/flight-details/${flightId}`}>View Flight details</Link>
          <ExternalLink size={14} />
        </DropdownMenuItem>
        <DropdownMenuItem className='border-b-2 flex justify-between'>
          <Link href={`/permission-details/${permissionId}`}>
            View permission details
          </Link>
          <ExternalLink size={14} />
        </DropdownMenuItem>
        <DropdownMenuItem className='border-b-2 flex justify-between'>
          <Link href={`/aircraft-details/${aircraftId}`}>
            View aircraft details
          </Link>
          <ExternalLink size={14} />
        </DropdownMenuItem>
        <DropdownMenuItem className='border-b-2 flex justify-between'>
          <Link href={`/airline-details/${aircraftId}`}>
            View airline details
          </Link>
          <ExternalLink size={14} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActionsDropDown;
