import React from 'react';

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
      <div className='grid  gap-10 p-3'>{flightCard}</div>
    </>
  );
}

export default FlightDetailsLayout;
