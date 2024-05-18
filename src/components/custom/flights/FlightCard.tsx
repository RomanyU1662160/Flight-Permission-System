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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FullFlightData } from '@/DB/types';
import { getCountryById } from '@/DB/helpers/flightDetails';

type FlightItemProps = {
  flightData: FullFlightData;
};

function FlightCard({ flightData }: FlightItemProps) {
  const {
    flight,
    callSign,
    airline,
    departureAirport,
    departureCity,
    arrivalAirport,
    arrivalCity,
    departureCountry,
    arrivalCountry,
  } = flightData;
  return (
    <>
      <Card className='shadow-lg bg-slate-200'>
        <CardHeader>
          <CardTitle className='text-3xl text-blue-300 text-center shadow-sm '>
            Flight Details for {callSign}
          </CardTitle>
          <CardDescription className='flex justify-between'>
            <span className='font-bold '>Route:</span>
            <span>
              {departureAirport?.name}/{arrivalAirport?.name}{' '}
            </span>
            <span className='font-bold'>Purpose: </span>
            <span>{flight?.flight_purpose}</span>
          </CardDescription>
          <CardDescription className='flex justify-between'>
            <span className='font-bold '>Dep date:</span>
            <span>{flight?.departure_time}</span>
            <span className='font-bold'>Arr Date: </span>
            <span>{flight?.arrival_time}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className=''>
            <TableHeader>
              <TableRow className='border-neutral-950'>
                <TableHead className='w-[100px]'>Call Sign</TableHead>
                <TableHead className='text-start'>Purpose</TableHead>
                <TableHead className='text-start'>Origin</TableHead>
                <TableHead className='text-start'>Destination</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>{callSign}</TableCell>

                <TableCell>{flight?.flight_purpose}</TableCell>
                <TableCell className='text-start'>
                  {departureAirport?.name}
                </TableCell>
                <TableCell className='text-start'>
                  {arrivalAirport?.name}
                </TableCell>
              </TableRow>
              <TableRow className='border'>
                <TableCell className='font-medium'>
                  {airline?.airline_name}
                </TableCell>

                <TableCell>{}</TableCell>
                <TableCell className='text-start'>
                  {departureCity?.city_name}
                </TableCell>
                <TableCell className='text-start'>
                  {arrivalCity?.city_name}
                </TableCell>
              </TableRow>
              <TableRow className='border'>
                <TableCell className='font-medium'>
                  {getCountryById(airline?.country_id as string)?.country_name}
                </TableCell>

                <TableCell>{}</TableCell>
                <TableCell className='text-start'>
                  {departureCountry?.country_name}
                </TableCell>
                <TableCell className='text-start'>
                  {arrivalCountry?.country_name}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant={'outline'}>View permission details</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default FlightCard;
