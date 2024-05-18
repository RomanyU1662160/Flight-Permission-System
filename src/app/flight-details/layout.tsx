import React from 'react';

type FlightDetailsLayoutProps = {
  allDetails: React.ReactNode;
  children: React.ReactNode;
};

function FlightDetailsLayout({
  allDetails,
  children,
}: FlightDetailsLayoutProps) {
  return (
    <>
      {children}
      <div className='grid  gap-10 p-3'>{allDetails}</div>
    </>
  );
}

export default FlightDetailsLayout;
