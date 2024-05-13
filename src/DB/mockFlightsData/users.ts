import { User } from '../types';

export const users: Array<User> = [
  {
    user_id: '1',
    user_name: 'user1',
    user_email: 'test@test.com',
    user_role: 'officer',
  },
  {
    user_id: '2',
    user_name: 'user3',
    user_email: 'user2@test.com',
    user_role: 'agent',
    agent_id: '1',
  },
  {
    user_id: '3',
    user_name: 'user3',
    user_email: 'user3@test.com',
    user_role: 'airline',
    airline_id: '1',
  },
];
