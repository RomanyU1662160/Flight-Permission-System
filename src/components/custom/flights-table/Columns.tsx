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
  ArrowUpDown,
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
import SortButton from './SortButton';

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
    accessorKey: 'flight_number',
    header: ({ column }) => <SortButton column={column} title='Flight No' />,
    sortDescFirst: true,
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'operator',
    header: ({ column }) => <SortButton column={column} title='Operator' />,
  },
  {
    accessorKey: 'AC_registration',
    header: ({ column }) => <SortButton column={column} title='A/C Reg' />,
  },
  {
    accessorKey: 'AC_type',
    header: () => <div className='text-blue-500 font-extrabold'>A/C Type</div>,
  },

  {
    accessorKey: 'purpose',
    header: ({ column }) => <SortButton column={column} title='Purpose' />,
  },
  {
    accessorKey: 'origin',

    header: ({ column }) => (
      <SortButton column={column} title='Origin'>
        <PlaneTakeoff size={24} className='ml-1' />
      </SortButton>
    ),
  },
  {
    accessorKey: 'departure',
    header: ({ column }) => <SortButton column={column} title='ETD' />,
    sortingFn: 'datetime',
  },
  {
    accessorKey: 'destination',

    header: ({ column }) => (
      <SortButton column={column} title='Destination'>
        <PlaneLandingIcon size={24} className='ml-1' />
      </SortButton>
    ),
  },

  {
    accessorKey: 'arrival',
    header: ({ column }) => <SortButton column={column} title='ETA' />,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <SortButton column={column} title='status' />,
    sortUndefined: 'last',
    cell: ({ row }) => {
      const status = row.getValue('status');
      if (status === 'approved') {
        return (
          <div className='text-green-600 flex gap-2'>
            <CheckCheck size={24} /> {status}
          </div>
        );
      }
      if (status === 'pending') {
        return (
          <div className='text-amber-700 flex gap-2'>
            <Clock7 size={24} />
            {status}
          </div>
        );
      }
      if (status === 'rejected') {
        return (
          <div className='text-red-600 flex font-bold gap-2'>
            <X size={24} /> {status}
          </div>
        );
      }
    },
  },
  {
    accessorKey: 'agent',
    header: ({ column }) => <SortButton column={column} title='Agent' />,
    sortUndefined: 'first',
  },
  {
    accessorKey: 'officer',
    header: ({ column }) => <SortButton column={column} title='Officer' />,
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
