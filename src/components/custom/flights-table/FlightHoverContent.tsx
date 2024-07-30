import React from 'react';
import { HoverCardContent } from '@/components/ui/hover-card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export type HoverContent = {
  flight_number: string;
  operator: string;
  purpose: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
};

type CardContentProps = {
  content: HoverContent;
};

function FlightHoverCardContent({ content }: CardContentProps) {
  const {
    flight_number,
    operator,
    purpose,
    origin,
    destination,
    departure,
    arrival,
  } = content;
  return (
    <HoverCardContent>
      <div className='flex'>
        <Info className='h-4 w-4 mr-4' />
        <AlertTitle className='font-bold'>
          <p>
            {operator} - {flight_number}{' '}
          </p>
        </AlertTitle>
      </div>

      <AlertDescription>
        <p className='text-sm'>{departure.split(' ')[0]}</p>
        <div className='flex flex-nowrap justify-between'>
          <span>{origin}:</span>
          <span className='justify-self-start '>
            {' '}
            {departure.split(' ')[1]}
          </span>
        </div>
        <div className='flex flex-nowrap justify-between'>
          <span>{destination}:</span>
          <span className='justify-self-start '>{arrival.split(' ')[1]}</span>
        </div>
        <div className='flex flex-nowrap justify-between'>
          <span>Purpose :</span>
          <span className='justify-self-start '>{purpose}</span>
        </div>
      </AlertDescription>
    </HoverCardContent>
  );
}

export default FlightHoverCardContent;
