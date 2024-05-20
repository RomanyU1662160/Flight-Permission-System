'use client';
import { FlightType, PermissionStatus } from '@/DB/types';
import { ColumnDef } from '@tanstack/react-table';
import {
  CheckCheck,
  Clock7,
  PlaneLandingIcon,
  PlaneTakeoff,
  X,
  MoreHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export interface Column {
  id: string;
  flight_number: string;
  AC_type: string;
  AC_registration: string;
  operator: string;
  purpose: FlightType;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  status: PermissionStatus;
  agent: string;
  officer: string;
}

export const columns: ColumnDef<Column>[] = [
  {
    header: () => (
      <div className='text-blue-500 font-extrabold'>Flight No.</div>
    ),
    accessorKey: 'flight_number',
  },
  {
    header: () => <div className='text-blue-500 font-extrabold'>Operator</div>,
    accessorKey: 'operator',
  },
  {
    header: () => <div className='text-blue-500 font-extrabold'>A/C Reg</div>,
    accessorKey: 'AC_registration',
  },
  {
    header: () => <div className='text-blue-500 font-extrabold'>A/C Type</div>,
    accessorKey: 'AC_type',
  },

  {
    header: () => <div className='text-blue-500 font-extrabold'>Purpose</div>,
    accessorKey: 'purpose',
  },
  {
    header: () => (
      <div className='text-blue-500 font-extrabold flex gap-4 items-center'>
        <span>Origin </span>
        <span>
          <PlaneTakeoff size={24} />
        </span>
      </div>
    ),
    accessorKey: 'origin',
  },
  {
    header: () => (
      <div className='text-blue-500 font-extrabold flex gap-4 items-center'>
        <span>ETD </span>{' '}
      </div>
    ),
    accessorKey: 'departure',
  },
  {
    header: () => (
      <div className='text-blue-500 font-extrabold flex gap-4 items-center'>
        <span>Destination </span>{' '}
        <span>
          <PlaneLandingIcon size={24} />
        </span>
      </div>
    ),
    accessorKey: 'destination',
  },

  {
    header: () => (
      <div className='text-blue-500 font-extrabold flex gap-4 items-center'>
        <span>ETA </span>{' '}
      </div>
    ),
    accessorKey: 'arrival',
  },
  {
    header: () => <div className='text-blue-500 font-extrabold'>Status</div>,
    accessorKey: 'status',
    cell: ({ row }) => {
      const status = row.getValue('status');
      if (status === 'approved') {
        return (
          <div className='text-green-600 flex gap-5'>
            <CheckCheck size={24} /> {status}
          </div>
        );
      }
      if (status === 'pending') {
        return (
          <div className='text-amber-700 flex gap-5'>
            <Clock7 size={24} />
            {status}
          </div>
        );
      }
      if (status === 'rejected') {
        return (
          <div className='text-red-600 flex font-bold gap-5'>
            <X size={24} /> {status}
          </div>
        );
      }
    },
  },
  {
    header: () => <div className='text-blue-500 font-extrabold'>Agent</div>,
    accessorKey: 'agent',
  },
  {
    header: () => <div className='text-blue-500 font-extrabold'>Officer</div>,
    accessorKey: 'officer',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const flight = row.original;

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
            <DropdownMenuItem>
              <Link href={`/flight-details/${flight.id}`}>
                View Flight details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>View Permission details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
