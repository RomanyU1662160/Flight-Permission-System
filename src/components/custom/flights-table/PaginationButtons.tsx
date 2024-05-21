'use client';

import React from 'react';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type PaginationProps<TData> = {
  table: Table<TData>;
};

function PaginationButtons<TData>({ table }: PaginationProps<TData>) {
  return (
    <div className='flex justify-end items-center py-3 gap-3 '>
      <span>
        Page{' '}
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>{' '}
      </span>
      <Button
        size='sm'
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
        className='fps-theme'
      >
        {'<<'}
      </Button>
      <Button
        size='sm'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className='fps-theme'
      >
        {'<'}
      </Button>
      <Button
        size='sm'
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className='fps-theme'
      >
        {'>'}
      </Button>
      <Button
        size='sm'
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
        className='fps-theme'
      >
        {'>>'}
      </Button>

      <Select
        defaultValue={table.getState().pagination.pageSize.toString()}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className='w-[60px]'>
          <SelectValue placeholder='Select' />
        </SelectTrigger>
        <SelectContent>
          {['2', '3', '4', '6', '10', '50'].map((pageSize) => (
            <SelectItem key={pageSize} value={pageSize}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default PaginationButtons;
