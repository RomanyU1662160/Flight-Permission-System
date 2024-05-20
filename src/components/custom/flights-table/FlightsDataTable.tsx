'use client';

import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import PaginationButtons from './PaginationButtons';

type FlightsTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

function FlightsDataTable<TData, TValue>({
  columns,
  data,
}: FlightsTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  /* 
  create table instance with the useReactTable custom hook
  and configure pagination, sorting and core row model
  */
  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0, //start at first page
        pageSize: 4, //show 4 rows per page as default, look select in PaginationButtons component
      },
    },
    // add core row model
    getCoreRowModel: getCoreRowModel(),
    // add pagination
    getPaginationRowModel: getPaginationRowModel({
      initialSync: true,
    }),
    //add sorting
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting: sorting,
    },
  });

  const headerGroups = table.getHeaderGroups();
  const rows = table.getRowModel().rows;

  table.getHeaderGroups().map((headerGroup) => {
    console.log('headerGroup:::>>>', headerGroup.headers);
  });

  return (
    <div className='rounded-md border'>
      <PaginationButtons table={table}></PaginationButtons>
      <Table>
        <TableHeader className='bg-slate-200 text-blue-600'>
          {headerGroups.map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody>
          {!rows?.length ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                No Flights to show{' '}
              </TableCell>
            </TableRow>
          ) : (
            <>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default FlightsDataTable;
