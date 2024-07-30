import {
  prepareFlightsForDataTable,
  prepareFullFlightsData,
} from '@/DB/helpers/flightDetails';
import { flights } from '@/DB/mockFlightsData';
import { Flight, FullFlightData } from '@/DB/types';
import { columns } from '@/components/custom/flights-table/Columns';
import FlightsDataTable from '@/components/custom/flights-table/FlightsDataTable';
import FlightsTable from '@/components/custom/flights/toDelete/FlightsTable';
import React from 'react';

const tableTitle = 'Flights';
async function FlightsPage() {
  const response = await fetch('http://localhost:3000/api/flights');
  const flightsData = (await response.json()) as FullFlightData[];

  const dataTableFlights = prepareFlightsForDataTable(flightsData);
  return (
    <>
      {/* <FlightsTable flightsData={flightsData} tableTitle={tableTitle} /> */}
      <FlightsDataTable columns={columns} data={dataTableFlights} />
    </>
  );
}

export default FlightsPage;
