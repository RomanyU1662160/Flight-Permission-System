import { prepareFullFlightsData } from '@/DB/helpers/flightDetails';
import { flights } from '@/DB/mockFlightsData';

export function GET(request: Request) {
  console.log('request:::>>>', request);
  const flightsData = prepareFullFlightsData(flights);
  return Response.json(flightsData);
}
