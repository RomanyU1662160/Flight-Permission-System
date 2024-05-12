import { Permission } from '../types';

export const flightPermissions: Array<Permission> = [
  {
    permission_id: '1',
    agent_id: '2',
    flight_id: '1',
    status: 'approved',
    officer_id: '1',
    submitted_at: '2021-09-01T00:00:00Z',
    last_update_at: '2021-09-01T00:00:00Z',
  },
  {
    permission_id: '2',
    agent_id: '3',
    flight_id: '2',
    status: 'pending',
    officer_id: '1',
    submitted_at: '2021-09-01T00:00:00Z',
    last_update_at: '2021-09-01T00:00:00Z',
  },
  {
    permission_id: '3',
    agent_id: '1',
    flight_id: '3',
    status: 'rejected',
    officer_id: '1',
    submitted_at: '2021-09-01T00:00:00Z',
    last_update_at: '2021-09-01T00:00:00Z',
  },
];
