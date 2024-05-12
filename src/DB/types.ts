export type User = {
  user_type_id: number;
  type_name: string;
};

export type FlightPermission = {
  permission_id: string;
  agent_id: string;
  flight_type: string;
  departure_time: string;
  arrival_time: string;
  departure_location: string;
  arrival_location: string;
  status: string;
};

export type Comment = {
  comment_id: string;
  permission_id: string;
  comment: string;
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
