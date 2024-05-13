import React from 'react';
import { CheckCircle } from 'lucide-react';

type FlightDetailsLayoutProps = {
  permission: React.ReactNode;
  airline: React.ReactNode;
  flight: React.ReactNode;
  children: React.ReactNode;
};

function FlightDetailsLayout({
  permission,
  airline,
  flight,
  children,
}: FlightDetailsLayoutProps) {
  return (
    <>
      <div className='flex justify-center gap-3 items-baseline'>
        <h1 className='text-center text-3xl text-gray-800 font-bold mt-10 mb-5'>
          Details of flight
        </h1>
        <CheckCircle className='text-green-500' size={'40px'} />
      </div>
      <div className='grid grid-cols-3 grid-flow-col gap-10 p-3'>
        {flight} {airline} {permission}
      </div>
    </>
  );
}

export default FlightDetailsLayout;
