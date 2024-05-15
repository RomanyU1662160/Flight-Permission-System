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
import { Agent, Airline, Flight, Permission, Officer } from '@/DB/types';
import { CheckCircle } from 'lucide-react';
type FlightItemProps = {
  permission: Permission;
};

function PermissionCard({ permission }: FlightItemProps) {
  return (
    <>
      <Card className='shadow-lg'>
        <CardHeader>
          <CardTitle className='text-3xl text-blue-300 text-center shadow-sm '>
            Details of Permission {permission?.id}
          </CardTitle>
          <CardDescription className='flex justify-between'>
            <span className='font-bold '>Submitted on :</span>
            <span> {permission.submitted_at} </span>
            <span className='font-bold'>Last update : </span>
            <span>{permission.last_update_at}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className=''>
            <TableCaption>Details of permission {permission?.id}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Permission</TableHead>
                <TableHead className='text-center'>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>{permission?.id}</TableCell>
                <TableCell>{permission?.status}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant={'outline'}>View permission details</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default PermissionCard;
