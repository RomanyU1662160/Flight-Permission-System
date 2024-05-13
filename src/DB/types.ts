export type Officer = {
  officer_id: string;
  login_id: string;
  type_name: string;
  first_name: string;
  last_name: string;
  officer_email: string;
  officer_password: string;
};

export type Agent = {
  agent_id: string;
  login_id: string;
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
  airline_id?: string;
};

export type Aircraft = {
  aircraft_id: string;
  aircraft_type: string;
  aircraft_registration: string;
  aircraft_model?: string;
  aircraft_capacity?: number;
  aircraft_owner?: string;
  airline_id: string;
};

export type Airline = {
  airline_id: string;
  airline_name: string;
  icao_code: string;
  iata_code: string;
  agent_id: string;
  country_id: string;
};

export type Airport = {
  airport_id: string;
  airport_name: string;
  airport_city_id: string;
  airport_type?: AirportType;
};

export type City = {
  city_id: string;
  city_name: string;
  country_id: string;
};

export type Country = {
  country_id: string;
  country_name: string;
};

export type Flight = {
  flight_id: string;
  flight_number: string;
  flight_type: FlightType;
  airline_id: string;
  aircraft_id: string;
  departure_date: string;
  arrival_date: string;
  departure_time: string;
  arrival_time: string;
  departure_airport_id: string;
  arrival_airport_id: string;
  isSchedule: boolean;
};

export type ScheduleFlight = {
  flight_id: string;
  flight_type: FlightType;
  airline_id: string;
  aircraft_id: string;
  start_date: string;
  end_date: string;
  departure_airport_id: string;
  arrival_airport_id: string;
  isSchedule: boolean;
};

export type Permission = {
  permission_id: string;
  agent_id: string;
  flight_id: string;
  officer_id: string;
  status: FlightStatus;
  submitted_at: string;
  last_update_at: string;
};

export type Comment = {
  comment_id: string;
  comment: string;
  permission_id: string;
  commenter_id: string;
  timestamp: string;
};

export type Assignment = {
  assignment_id: string;
  permission_id: string;
  assigned_to: string;
  assigned_by: string;
  timestamp: string;
};

export type FlightType = 'charter' | 'overflight' | 'tech-landing';

export type FlightStatus = 'pending' | 'approved' | 'rejected';

export type AirportType = 'international' | 'domestic';

export type UserType = 'officer' | 'agent' | 'admin' | 'airline';
