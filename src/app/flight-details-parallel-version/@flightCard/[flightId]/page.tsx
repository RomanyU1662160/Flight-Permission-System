import { getFullFlightData } from '@/DB/helpers';
import FlightCard from '@/components/custom/flights/FlightCard';
import React from 'react';

type AirlineDetailsProps = {
  params: {
    flightId: string;
  };
};

function AirlineDetails({ params }: AirlineDetailsProps) {
  const fullFlightDetails = getFullFlightData(params.flightId);
  if (!fullFlightDetails) {
    return <div>Flight not found</div>;
  }
  return (
    <>
      <FlightCard flightData={fullFlightDetails} />
    </>
  );
}

export default AirlineDetails;
