import { getFullFlightData } from '@/DB/helpers';
import { flights } from '@/DB/mockFlightsData';
import { FullFlightData } from '@/DB/types';
import FlightsTable from '@/components/custom/flights/FlightsTable';
import React from 'react';

const prepareFlightsData = () => {
  const flightsDataArray: Array<FullFlightData> = [];
  flights.map((flight) => {
    const flightData = getFullFlightData(flight.id);
    flightsDataArray.push(flightData);
  });
  return flightsDataArray;
};
const tableTitle = 'Flights';
function FlightsPage() {
  const flightsData = prepareFlightsData();
  return (
    <>
      <span className='text-muted-foreground'>To add search functionality</span>

      <FlightsTable flightsData={flightsData} tableTitle={tableTitle} />
    </>
  );
}

export default FlightsPage;
