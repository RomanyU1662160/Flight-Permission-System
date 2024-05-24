export type Officer = {
  id: string;
  login_id: string;
  type_name: string;
  first_name: string;
  last_name: string;
  officer_email: string;
  officer_password: string;
};

export type Agent = {
  id: string;
  loginId: string;
  agent_name: string;
  agent_email: string;
  agent_phone?: string;
  agent_address?: string;
};

export type User = {
  user_id: string;
  user_name: string;
  user_email: string;
  user_role: UserType;
  agent_id?: string;
  airlineId?: string;
};

export type Aircraft = {
  id: string;
  type: string;
  registration: string;
  isPrivate: boolean;
  model?: string;
  capacity?: number;
  owner?: string;
  airlineId?: string;
};

export type Airline = {
  airlineId: string;
  airline_name: string;
  icao_code: string;
  iata_code: string;
  agent_id: string;
  country_id: string;
};

export type Airport = {
  id: string;
  name: string;
  cityId: string;
  airport_type?: AirportType;
};

export type City = {
  id: string;
  city_name: string;
  countryId: string;
};

export type Country = {
  id: string;
  country_name: string;
};

export type Flight = {
  id: string;
  flight_number: string;
  flight_purpose: FlightType;
  airlineId: string;
  aircraftId: string;
  departure_date: string;
  arrival_date: string;
  departure_time: string;
  arrival_time: string;
  departure_airport_id: string;
  arrival_airport_id: string;
  isSchedule: boolean;
  callSign: string;
  slug: string;
};

export type ScheduleFlight = {
  flight_id: string;
  flight_purpose: FlightType;
  airlineId: string;
  aircraft_id: string;
  start_date: string;
  end_date: string;
  departure_airport_id: string;
  arrival_airport_id: string;
  isSchedule: boolean;
};

export type Permission = {
  id: string;
  agentId: string;
  flightId: string;
  officerId: string;
  status: PermissionStatus;
  submitted_at: string;
  last_update_at: string;
};

export type Comment = {
  id: string;
  comment: string;
  permissionId: string;
  commenterId: string;
  timestamp: string;
};

export type Assignment = {
  id: string;
  permissionId: string;
  assigned_to: string;
  assigned_by: string;
  timestamp: string;
};

export type FullPermissionData = {
  comments: Comment[] | undefined;
  flights: Flight[] | undefined;
  assignment: Assignment | undefined;
  agent: Agent | undefined;
};

export type FullFlightData = {
  flight: Flight | undefined;
  callSign: string;
  permission: Permission | undefined;
  agent: Agent | undefined;
  officer: Omit<Officer, 'officer_password'> | undefined;
  airline: Airline | undefined;
  departureAirport: Airport | undefined;
  departureCity: City | undefined;
  arrivalAirport: Airport | undefined;
  arrivalCity: City | undefined;
  departureCountry: Country | undefined;
  arrivalCountry: Country | undefined;
  aircraft: Aircraft | undefined;
};

export type FlightType =
  | 'charter'
  | 'overflight'
  | 'tech-landing'
  | 'emergency'
  | 'cargo'
  | 'passenger'
  | 'repatriation'
  | 'medical'
  | 'positioning'
  | 'training'
  | 'test'
  | 'other';

export type PermissionStatus = 'pending' | 'approved' | 'rejected';

export type AirportType = 'international' | 'domestic';

export type UserType = 'officer' | 'agent' | 'admin' | 'airline';
