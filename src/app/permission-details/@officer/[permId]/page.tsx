import {
  getOfficerApproverByPermissionId,
  getOfficerById,
  getPermissionById,
} from '@/DB/helpers/flightDetails';
import React from 'react';

type OfficerPageProps = {
  params: {
    permId: string;
  };
};

function OfficerPage({ params }: OfficerPageProps) {
  const { permId } = params;

  const officer = getOfficerApproverByPermissionId(permId);

  return <div>OfficerPage</div>;
}

export default OfficerPage;
