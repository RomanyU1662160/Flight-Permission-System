import {
  getFlightById,
  prepareFullFlightsData,
} from '@/DB/helpers/flightDetails';
import {
  getFilterYears,
  getFlightHistoryByYearAndFlightNumber,
} from '@/DB/helpers/flightHistory';
import FlightsTable from '@/components/custom/flights/FlightsTable';
import React from 'react';

type FlightHistoryArchivePageProps = {
  params: {
    filters: string[];
  };
};

function FlightHistoryArchivePage({ params }: FlightHistoryArchivePageProps) {
  const filters = params.filters;
  const flightSlug = filters[0];
  const yearSlug = filters[1];

  const flightsByYear = getFlightHistoryByYearAndFlightNumber(
    flightSlug,
    yearSlug
  );
  console.log('flightsByYear:::>>>', flightsByYear);

  const archivedFlightsData = prepareFullFlightsData(flightsByYear);
  const tableTitle = `Previous ${archivedFlightsData[0]?.callSign} flights operated on year ${yearSlug}`;

  if (!archivedFlightsData.length) {
    return yearSlug ? (
      <h2 className='text-center'>No flights found for year {yearSlug}</h2>
    ) : (
      <h2 className='text-center'>Please select a year </h2>
    );
  }

  return (
    <>
      <FlightsTable flightsData={archivedFlightsData} tableTitle={tableTitle} />
    </>
  );
}

export default FlightHistoryArchivePage;
