import { getFullFlightData } from '@/DB/helpers';
import OfficerCard from '@/components/custom/officers/OfficerCard';
import React from 'react';

type OfficerDetailsProps = {
  params: {
    flightId: string;
  };
};

function OfficerDetails({ params }: OfficerDetailsProps) {
  const { officer } = getFullFlightData(params.flightId);

  if (!officer) {
    return <div>Officer not found</div>;
  }
  return <OfficerCard officer={officer} />;
}

export default OfficerDetails;
