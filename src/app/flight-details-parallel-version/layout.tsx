import React from 'react';
import { CheckCircle } from 'lucide-react';

type FlightDetailsLayoutProps = {
  permissionCard: React.ReactNode;
  airlineCard: React.ReactNode;
  flightCard: React.ReactNode;
  officerCard: React.ReactNode;
  children: React.ReactNode;
};

function FlightDetailsLayout({
  permissionCard,
  airlineCard,
  flightCard,
  officerCard,
  children,
}: FlightDetailsLayoutProps) {
  return (
    <>
      {children}
      <div className='grid grid-cols-2 gap-10 p-3'>
        {flightCard} {airlineCard} {permissionCard} {officerCard}
      </div>
    </>
  );
}

export default FlightDetailsLayout;
