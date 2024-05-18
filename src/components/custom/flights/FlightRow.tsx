'use client';
import { FullFlightData } from '@/DB/types';
import React, { useMemo } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type FlightRowProps = {
  flightData: FullFlightData;
};

function FlightRow({ flightData }: FlightRowProps) {
  const {
    flight,
    permission,
    agent,
    departureCity,
    arrivalCity,
    departureAirport,
    departureCountry,
    arrivalAirport,
    arrivalCountry,
    airline,
  } = flightData;

  const isApproved = useMemo(
    () => permission?.status === 'approved',
    [permission?.status]
  );
  const isPending = useMemo(() => {
    return permission?.status === 'pending';
  }, [permission?.status]);

  const isRejected = useMemo(() => {
    return permission?.status === 'rejected';
  }, [permission?.status]);

  const callSign = useMemo(() => {
    return `${airline?.icao_code ?? ''}${flight?.flight_number} `;
  }, [airline?.icao_code, flight?.flight_number]);

  return (
    <TableRow>
      <TableCell className='font-extrabold  text-center'>{callSign}</TableCell>
      <TableCell className='  text-center'>{airline?.airline_name}</TableCell>
      <TableCell className='text-center'>
        {flight?.flight_purpose ?? 'N/A'} {flight?.isSchedule && '(Scheduled)'}
      </TableCell>
      <TableCell className='text-center text-wrap'>
        {departureCity?.city_name ?? 'N/A'} (
        {departureCountry?.country_name ?? 'N/A'})
      </TableCell>
      <TableCell className='text-center text-wrap'>
        {arrivalCity?.city_name ?? 'N/A'} (
        {arrivalCountry?.country_name ?? 'N/A'})
      </TableCell>
      <TableCell className='text-center'>
        {agent?.agent_name ?? 'N/A'}
      </TableCell>
      <TableCell className='text-center'>
        {isApproved && '✅ '}
        {isPending && '⏳ '}
        {isRejected && '❌ '} {permission?.status ?? ' N/A'}
      </TableCell>
      <TableCell className='text-center'>
        <Button asChild>
          <Link href={`/flight-details/${flight?.id}`}>View</Link>
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default FlightRow;
