import { Airline } from '../types';

export const airlines: Array<Airline> = [
  {
    airlineId: '1',
    airline_name: 'EgyptAir',
    icao_code: 'MSR',
    iata_code: 'MS',
    agent_id: '1',
    country_id: '1',
  },
  {
    airlineId: '2',
    airline_name: 'British Airways',
    icao_code: 'BAW',
    iata_code: 'BA',
    agent_id: '1',
    country_id: '3',
  },
  {
    airlineId: '3',
    airline_name: 'Lufthansa',
    icao_code: 'DLH',
    iata_code: 'LH',
    agent_id: '2',
    country_id: '4',
  },

  {
    airlineId: '4',
    airline_name: 'Emirates',
    icao_code: 'UAE',
    iata_code: 'EK',
    agent_id: '2',
    country_id: '5',
  },

  {
    airlineId: '5',
    airline_name: 'Air France',
    icao_code: 'AFR',
    iata_code: 'AF',
    agent_id: '3',
    country_id: '6',
  },
];
