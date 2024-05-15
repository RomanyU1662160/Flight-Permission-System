import { Permission } from '../types';

export const permissions: Array<Permission> = [
  {
    id: '1',
    agentId: '2',
    flightId: '1',
    status: 'approved',
    officerId: '1',
    submitted_at: '2021-09-01T00:00:00Z',
    last_update_at: '2021-09-01T00:00:00Z',
  },
  {
    id: '2',
    agentId: '3',
    flightId: '2',
    status: 'pending',
    officerId: '1',
    submitted_at: '2021-09-01T00:00:00Z',
    last_update_at: '2021-09-01T00:00:00Z',
  },
  {
    id: '3',
    agentId: '1',
    flightId: '3',
    status: 'rejected',
    officerId: '1',
    submitted_at: '2021-09-01T00:00:00Z',
    last_update_at: '2021-09-01T00:00:00Z',
  },
];
