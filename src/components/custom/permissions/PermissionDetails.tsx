import { Permission } from '@/DB/types';
import React from 'react';

type PermissionDetailsProps = {
  permission: Permission;
};
function PermissionDetails({ permission }: PermissionDetailsProps) {
  return (
    <div>
      <h1 className='text-center'>
        Details of Permission {permission.id}
        {permission.status === 'approved' ? (
          <span className='text-green-500'> Approved </span>
        ) : null}
        {permission.status === 'rejected' ? (
          <span className='text-red-500'> Rejected </span>
        ) : null}
        {permission.status === 'pending' ? (
          <span className='text-yellow-500'> Pending </span>
        ) : null}
      </h1>
      <div className='grid  md:grid-flow-col grid-flow-row gap-10 justify-between'>
        <PermissionDetails permission={permission} />
        <div>
          <h2>Submitted at: {permission.submitted_at}</h2>
          <h2>Last updated at: {permission.last_update_at}</h2>
        </div>
      </div>
    </div>
  );
}

export default PermissionDetails;
