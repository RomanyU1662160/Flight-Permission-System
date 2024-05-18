import { prepareFullFlightsData } from '@/DB/helpers/flightDetails';
import { flights } from '@/DB/mockFlightsData';
import { Flight, FullFlightData } from '@/DB/types';
import FlightsTable from '@/components/custom/flights/FlightsTable';
import React from 'react';

const tableTitle = 'Flights';
function FlightsPage() {
  const flightsData = prepareFullFlightsData(flights);
  return (
    <>
      <span className='text-muted-foreground'>To add search functionality</span>

      <FlightsTable flightsData={flightsData} tableTitle={tableTitle} />
    </>
  );
}

export default FlightsPage;
