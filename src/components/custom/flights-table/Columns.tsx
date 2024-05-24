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
import SortButton from './SortButton';
import FilterInput from './FilterInput';
import ActionsDropDown from './ActionsBtn';

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
  permissionId: string;
  airlineId: string;
  aircraftId: string;
}

export const columns: ColumnDef<Column>[] = [
  {
    accessorKey: 'flight_number',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='Flight No' />
        <FilterInput column={column} />
      </div>
    ),
    sortDescFirst: true,
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'operator',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='operator' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'AC_registration',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='A/C reg' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'AC_type',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='A/C type' />
        <FilterInput column={column} />
      </div>
    ),
  },

  {
    accessorKey: 'purpose',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='purpose' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'origin',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='Origin'>
          <PlaneTakeoff size={24} className='ml-1' />
        </SortButton>
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'departure',
    sortingFn: 'datetime',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='ETD' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'destination',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='Destination'>
          <PlaneLandingIcon size={24} className='ml-1' />
        </SortButton>
        <FilterInput column={column} />
      </div>
    ),
  },

  {
    accessorKey: 'arrival',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='ETA' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'status',
    sortUndefined: 'last',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='Status' />
        <FilterInput column={column} />
      </div>
    ),
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
    sortUndefined: 'first',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='Agent' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    accessorKey: 'officer',
    header: ({ column }) => (
      <div className='flex flex-col gap-2'>
        <SortButton column={column} title='Officer' />
        <FilterInput column={column} />
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const flightRow = row.original;
      return (
        <ActionsDropDown
          flightId={flightRow.id}
          permissionId={flightRow.permissionId}
          aircraftId={flightRow.aircraftId}
          airlineId={flightRow.airlineId}
        />
      );
    },
  },
];
