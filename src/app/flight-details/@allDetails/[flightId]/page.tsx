import { getFullFlightData } from '@/DB/helpers/flightDetails';
import React from 'react';
import FlightDetails from '@/components/custom/flights/FlightDetails';

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
  return <FlightDetails fullFlightDetails={fullFlightDetails} />;
}

export default AirlineDetails;
