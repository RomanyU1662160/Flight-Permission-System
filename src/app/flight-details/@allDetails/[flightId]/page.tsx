import { getFullFlightData } from '@/DB/helpers/flightDetails';
import FlightCard from '@/components/custom/flights/FlightCard';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PermissionCard from '@/components/custom/permissions/PermissionCard';
import OfficerCard from '@/components/custom/officers/OfficerCard';
import { CheckCircle } from 'lucide-react';

type AirlineDetailsProps = {
  params: {
    flightId: string;
  };
};

function AirlineDetails({ params }: AirlineDetailsProps) {
  const fullFlightDetails = getFullFlightData(params.flightId);
  if (!fullFlightDetails) {
    return <div>Flight not found</div>;
  }
  return (
    <>
      <div className='flex justify-center gap-3 items-baseline shadow-lg'>
        <h2 className='text-center text-3xl text-gray-800 font-bold mt-10 mb-5'>
          Details of flight {fullFlightDetails.callSign}
        </h2>
        <CheckCircle className='text-green-500' size={'40px'} />
      </div>
      <Tabs defaultValue='account' className='w-full'>
        <TabsList>
          <TabsTrigger value='flight'>Flight details </TabsTrigger>
          <TabsTrigger value='permission'>Permission details</TabsTrigger>
          <TabsTrigger value='officer'>Officer details</TabsTrigger>
          <TabsTrigger value='origin'>Origin details</TabsTrigger>
          <TabsTrigger value='destination'>Destination details</TabsTrigger>
          <TabsTrigger value='comments'>comments</TabsTrigger>
          <TabsTrigger value='history'>History</TabsTrigger>
        </TabsList>
        <TabsContent value='flight'>
          <FlightCard flightData={fullFlightDetails} />
        </TabsContent>
        <TabsContent value='permission'>
          {fullFlightDetails.permission ? (
            <PermissionCard permission={fullFlightDetails.permission} />
          ) : (
            <div>Permission not found</div>
          )}
        </TabsContent>
        <TabsContent value='officer'>
          {fullFlightDetails.officer ? (
            <OfficerCard officer={fullFlightDetails.officer} />
          ) : (
            <div>Officer not found</div>
          )}
        </TabsContent>
        <TabsContent value='origin'>
          <div>Origin details</div>
        </TabsContent>
        <TabsContent value='destination'>
          <div>Destination details</div>
        </TabsContent>
        <TabsContent value='comments'>
          <div>Comments</div>
        </TabsContent>
        <TabsContent value='history'>
          <div>History graphs</div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default AirlineDetails;
