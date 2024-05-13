import { Permission } from '@/DB/types';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

type PermissionCardProps = {
  permission: Permission;
};

function PermissionCard({ permission }: PermissionCardProps) {
  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle className='text-3xl text-blue-300 text-center shadow-sm '>
          Permission Details
        </CardTitle>
        <CardDescription className='flex justify-between'>
          <span className='font-bold '>submitted on:</span>
          <span> {permission?.submitted_at} </span>
          <span className='font-bold'>last Update: </span>
          <span>{permission?.last_update_at}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className=''>
          <TableCaption>Permission Data </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Status</TableHead>

              <TableHead className='text-right'>More</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>
                {permission?.status}
              </TableCell>

              <TableCell></TableCell>
              <TableCell className='text-right'>
                <button className='text-blue-500'>view comments</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button variant={'outline'}>View permission details</Button>
      </CardFooter>
    </Card>
  );
}

export default PermissionCard;
