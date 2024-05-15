import { getFullFlightData } from '@/DB/helpers';
import FlightCard from '@/components/custom/flights/FlightCard';
import PermissionCard from '@/components/custom/permissions/PermissionCard';
import React from 'react';

type PermissionDetailsProps = {
  params: {
    flightId: string;
  };
};

function PermissionDetails({ params }: PermissionDetailsProps) {
  const { permission } = getFullFlightData(params.flightId);
  if (!permission) {
    return <div>Permission not found</div>;
  }
  return <PermissionCard permission={permission} />;
}

export default PermissionDetails;
