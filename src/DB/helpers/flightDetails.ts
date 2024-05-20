import { Column } from '@/components/custom/flights-table/Columns';
import * as data from '../mockFlightsData';
import {
  Agent,
  Aircraft,
  Airline,
  Airport,
  City,
  Country,
  Flight,
  FlightType,
  FullFlightData,
  Officer,
  Permission,
  PermissionStatus,
} from '../types';

export const getFlights = () => {
  return data.flights;
};

// aircrafts helpers
export const getAircrafts = () => {
  return data.aircrafts;
};

export const getAircraftById = (id: string) => {
  return data.aircrafts.find((aircraft) => aircraft.id === id);
};

export const getAircraftByFlightId = (flightId: string) => {
  return data.aircrafts.find((aircraft) => aircraft.airlineId === flightId);
};

export const getAirLineByAircraftId = (aircraftId: string) => {
  return data.airlines.find((airline) => airline.airlineId === aircraftId);
};

/*  airport helpers  */
export const getAirports = () => {
  return data.airports;
};
export const getAirportById = (id: string) => {
  return data.airports.find((airport) => airport.id === id);
};

export const getAirportsByCityId = (id: string): Airport[] => {
  return data.airports.filter((airport) => airport.cityId === id);
};

/* flights helpers */

export const getFlightById = (id: string) => {
  return data.flights.find((flight) => flight.id === id);
};

export const getFlightByNumber = (flightNumber: string) => {
  return data.flights.find((flight) => flight.flight_number === flightNumber);
};

/* airlines helpers */
export const getAirlines = () => {
  return data.airlines;
};

export const getAirlineById = (id: string) => {
  return data.airlines.find((airline) => airline.airlineId === id);
};

export const getAirlineByFlightId = (id: string) => {
  const flight = getFlightById(id);
  return data.airlines.find(
    (airline) => airline.airlineId === flight?.airlineId
  );
};

/* countries helpers */
export const getCountries = () => {
  return data.countries;
};

export const getCountryById = (id: string) => {
  return data.countries.find((country) => country.id === id);
};

export const getCountryByCityId = (id: string) => {
  const city = getCityById(id);
  return data.countries.find((country) => country.id === city?.countryId);
};

export const getCountryByAirportId = (id: string) => {
  const airport = getAirportById(id);
  const city = getCityById(airport?.cityId as string);
  return data.countries.find((country) => country.id === city?.countryId);
};

/* cities helpers */
export const getCityById = (id: string) => {
  return data.cities.find((city) => city.id === id);
};

/* permissions helpers */
export const getPermissionById = (id: string) => {
  return data.permissions.find((permission) => permission.id === id);
};
export const getPermissionByFlightId = (id: string) => {
  return data.permissions.find((permission) => permission.flightId === id);
};

/* officers helpers */
export const getOfficers = (): Omit<Officer, 'officer_password'>[] => {
  return data.officers;
};

export const getOfficerById = (
  id: string
): Omit<Officer, 'officer_password'> | undefined => {
  return data.officers.find((officer) => officer.id === id);
};

export const getOfficerByFlightId = (
  id: string
): Omit<Officer, 'officer_password'> | undefined => {
  const permission = getPermissionByFlightId(id);
  return data.officers.find((officer) => officer.id === permission?.officerId);
};

/* agents helpers */
export const getAgents = (): Agent[] => {
  return data.agents;
};

export const getAgentById = (id: string): Agent | undefined => {
  return data.agents.find((agent) => agent.id === id);
};

export const getAgentByPermissionId = (id: string): Agent | undefined => {
  const permission = getPermissionById(id);
  return data.agents.find((agent) => agent.id === permission?.agentId);
};

export const getAgentByFlightId = (id: string): Agent | undefined => {
  const permission = getPermissionByFlightId(id);
  return data.agents.find((agent) => agent.id === permission?.agentId);
};

export const buildFlightCallSign = (flight: Flight, airline: Airline) => {
  if (!flight || !airline) {
    return '';
  }
  if (airline?.icao_code) {
    return `${airline.icao_code}${flight?.flight_number}`;
  } else if (airline?.iata_code) {
    return `${airline?.iata_code}${flight?.flight_number}`;
  } else {
    return `${airline?.airlineId}${flight?.flight_number}`;
  }
};

export const getFullFlightData = (id: string): FullFlightData => {
  let flight: Flight | undefined;
  let airline: Airline | undefined;
  let departureAirport: Airport | undefined;
  let arrivalAirport: Airport | undefined;
  let departureCity: City | undefined;
  let arrivalCity: City | undefined;
  let departureCountry: Country | undefined;
  let arrivalCountry: Country | undefined;
  let permission: Permission | undefined;
  let callSign: string | undefined;
  let aircraft: Aircraft | undefined;

  flight = getFlightById(id);
  permission = getPermissionByFlightId(id);
  const agent = getAgentByFlightId(id);
  const officer = getOfficerByFlightId(id);
  airline = getAirlineById(flight?.airlineId as string);

  aircraft = getAircraftByFlightId(flight?.id as string);

  callSign = buildFlightCallSign(flight as Flight, airline as Airline);

  departureAirport = getAirportById(flight?.departure_airport_id as string);
  arrivalAirport = getAirportById(flight?.arrival_airport_id as string);

  departureCity = getCityById(departureAirport?.cityId as string);
  arrivalCity = getCityById(arrivalAirport?.cityId as string);

  departureCountry = getCountryByAirportId(
    flight?.departure_airport_id as string
  );
  arrivalCountry = getCountryByAirportId(flight?.arrival_airport_id as string);

  return {
    flight,
    callSign,
    aircraft,
    permission,
    agent,
    officer,
    airline,
    departureAirport,
    departureCity,
    arrivalAirport,
    arrivalCity,
    departureCountry,
    arrivalCountry,
  };
};

export const prepareFullFlightsData = (flights: Flight[]) => {
  const flightsDataArray: Array<FullFlightData> = [];
  flights.map((flight) => {
    const flightData = getFullFlightData(flight.id);
    flightsDataArray.push(flightData);
  });
  return flightsDataArray;
};

export const prepareFlightsForDataTable = (
  fullFlightsData: FullFlightData[]
): Column[] => {
  const columns: Column[] = [];
  fullFlightsData.map((fullFlightData) => {
    const columnData: Column = {
      id: fullFlightData.flight?.id as string,
      flight_number: fullFlightData.callSign as string,
      AC_type: fullFlightData.aircraft?.type as string,
      AC_registration: fullFlightData.aircraft?.registration as string,
      operator: fullFlightData.airline?.airline_name as string,
      purpose: fullFlightData.flight?.flight_purpose as FlightType,
      origin: fullFlightData.departureAirport?.name as string,
      destination: fullFlightData.arrivalAirport?.name as string,
      departure: fullFlightData.flight?.departure_time as string,
      arrival: fullFlightData.flight?.arrival_time as string,
      status: fullFlightData.permission?.status as PermissionStatus,
      agent: fullFlightData.agent?.agent_name as string,
      officer: fullFlightData.officer?.first_name as string,
    };
    columns.push(columnData);
  });
  return columns;
};
