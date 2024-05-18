import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FullFlightData } from '@/DB/types';
import FlightRow from './FlightRow';

type FlightsTableProps = {
  flightsData: FullFlightData[];
  tableTitle: string;
};

function FlightsTable({ flightsData, tableTitle }: FlightsTableProps) {
  return (
    <>
      <h1 className='text-3xl  text-center text-blue-400 border-b-4  '>
        {tableTitle}
      </h1>
      <div className='p-2 border md:p-0 flex'>
        <Table className='w-full table-auto md:table-fixed shadow-lg'>
          <TableHeader>
            <TableRow className=' bg-slate-400 font-bold text-blue-600 '>
              <TableHead className='w-[50px] text-bold '>
                Flight Number
              </TableHead>
              <TableHead className=' text-center text-bold '>
                Operator
              </TableHead>
              <TableHead className='text-center  text-bold '>Purpose</TableHead>
              <TableHead className='text-center  text-bold'>Origin</TableHead>
              <TableHead className='text-center  text-bold'>
                Destination
              </TableHead>
              <TableHead className='text-center  text-bold'>Agent</TableHead>
              <TableHead className='text-center  text-bold'>
                Permission
              </TableHead>
              <TableHead className='text-center  text-bold'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flightsData.map((flightData) => {
              return (
                <FlightRow
                  key={flightData.flight?.id}
                  flightData={flightData}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default FlightsTable;
