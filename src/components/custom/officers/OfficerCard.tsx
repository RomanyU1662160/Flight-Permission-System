import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Officer } from '@/DB/types';

type OfficerCardProps = {
  officer: Omit<Officer, 'officer_password'>;
};

function OfficerCard({ officer }: OfficerCardProps) {
  return (
    <>
      <Card className='shadow-lg'>
        <CardHeader>
          <CardTitle className='text-3xl text-blue-300 text-center shadow-sm '>
            Officer Name: {officer?.first_name} {officer?.last_name}
          </CardTitle>
          <CardDescription className='flex justify-between'>
            <span className='font-bold '>Login ID:</span>
            <span> {officer?.login_id} </span>
            <span className='font-bold'>Type: </span>
            <span>{officer?.type_name}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex justify-between'>
            <span className='font-bold'>Email:</span>
            <span>{officer?.officer_email}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant={'outline'}>View officer details</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default OfficerCard;
