import { Flight } from '../types';

export const flights: Array<Flight> = [
  {
    id: '1',
    flight_number: '578',
    flight_type: 'charter',
    airline_id: '2',
    aircraft_id: '1',
    departure_date: '2022-01-01',
    arrival_date: '2022-01-01',
    departure_time: '2022-01-01 10:00:00',
    arrival_time: '2022-01-01 12:00:00',
    departure_airport_id: '1',
    arrival_airport_id: '8',
    isSchedule: false,
  },
  {
    id: '2',
    flight_number: '579',
    flight_type: 'overflight',
    airline_id: '2',
    aircraft_id: '2',
    departure_date: '2022-01-02',
    arrival_date: '2022-01-02',
    departure_time: '2022-01-02 14:00:00',
    arrival_time: '2022-01-02 16:00:00',
    departure_airport_id: '1',
    arrival_airport_id: '13',
    isSchedule: false,
  },
  {
    id: '3',
    flight_number: '580',
    flight_type: 'tech-landing',
    airline_id: '3',
    aircraft_id: '3',
    departure_date: '2022-01-03',
    arrival_date: '2022-01-03',
    departure_time: '2022-01-03 18:00:00',
    arrival_time: '2022-01-03 20:00:00',
    departure_airport_id: '5',
    arrival_airport_id: '6',
    isSchedule: false,
  },
];
