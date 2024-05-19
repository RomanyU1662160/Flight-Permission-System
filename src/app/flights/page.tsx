import {
  prepareFlightsForDataTable,
  prepareFullFlightsData,
} from '@/DB/helpers/flightDetails';
import { flights } from '@/DB/mockFlightsData';
import { Flight, FullFlightData } from '@/DB/types';
import { columns } from '@/components/custom/flights-table/Columns';
import FlightsDataTable from '@/components/custom/flights-table/FlightsDataTable';
import FlightsTable from '@/components/custom/flights/FlightsTable';
import React from 'react';

const tableTitle = 'Flights';
function FlightsPage() {
  const flightsData = prepareFullFlightsData(flights);

  const columnsData = prepareFlightsForDataTable(flightsData);
  return (
    <>
      <span className='text-muted-foreground'>To add search functionality</span>

      {/* <FlightsTable flightsData={flightsData} tableTitle={tableTitle} /> */}
      <FlightsDataTable columns={columns} data={columnsData} />
    </>
  );
}

export default FlightsPage;
