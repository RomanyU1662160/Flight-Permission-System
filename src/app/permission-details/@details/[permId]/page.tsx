import { getPermissionById } from '@/DB/helpers/flightDetails';
import PermissionDetails from '@/components/custom/permissions/PermissionDetails';
import React from 'react';

type PermissionDetailsProps = {
  params: {
    permId: string;
  };
};

function permissionDetails({ params }: PermissionDetailsProps) {
  const permission = getPermissionById(params.permId);

  if (!permission) {
    return <div>Permission not found</div>;
  }
  return <PermissionDetails permission={permission} />;
}

export default permissionDetails;
