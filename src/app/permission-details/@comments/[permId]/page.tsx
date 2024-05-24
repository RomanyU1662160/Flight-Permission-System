import { getPermissionCommentsByPermissionId } from '@/DB/helpers/flightDetails';
import React from 'react';

type PermissionCommentsProps = {
  params: {
    permId: string;
  };
};

function PermissionComments({ params }: PermissionCommentsProps) {
  const { permId } = params;

  const comments = getPermissionCommentsByPermissionId(permId);

  return <div>PermissionComments</div>;
}

export default PermissionComments;
