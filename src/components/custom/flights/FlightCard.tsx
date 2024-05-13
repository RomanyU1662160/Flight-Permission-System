import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Agent, Airline, Flight, Permission, Officer } from '@/DB/types';
import { CheckCircle } from 'lucide-react';
type FlightItemProps = {
  flight: Flight;
};

function FlightCard({ flight }: FlightItemProps) {
  return (
    <>
      <div className='flex justify-center gap-3 items-baseline'>
        <h1 className='text-center text-3xl text-gray-800 font-bold mt-10 mb-5'>
          Details of flight {flight?.flight_id}
        </h1>
        <CheckCircle className='text-green-500' size={'40px'} />
      </div>
      <div className='grid grid-cols-3 grid-flow-col gap-10 p-3'>
        <Card className='shadow-lg'>
          <CardHeader>
            <CardTitle className='text-3xl text-blue-300 text-center shadow-sm '>
              Flight Details
            </CardTitle>
            <CardDescription className='flex justify-between'>
              <span className='font-bold '>Origin:</span>
              <span> {flight?.departure_airport_id} </span>
              <span className='font-bold'>Destination: </span>
              <span>{flight?.arrival_airport_id}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table className=''>
              <TableCaption>
                Details of flight {flight?.flight_number}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Call Sign</TableHead>
                  <TableHead className='text-center'>Purpose</TableHead>
                  <TableHead className='text-center'>Origin</TableHead>
                  <TableHead className='text-center'>Destination</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>
                    {flight?.flight_number}
                  </TableCell>

                  <TableCell>{flight?.flight_type}</TableCell>
                  <TableCell className='text-right'>
                    {flight?.departure_airport_id}
                  </TableCell>
                  <TableCell className='text-right'>
                    {flight?.arrival_airport_id}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant={'outline'}>View permission details</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default FlightCard;
