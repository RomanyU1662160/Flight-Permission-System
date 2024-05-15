import { Officer } from '../types';

export const officers: Array<Omit<Officer, 'officer_password'>> = [
  {
    id: '1',
    login_id: 'officer1',
    type_name: 'Admin',
    first_name: 'John',
    last_name: 'Doe',
    officer_email: 'officer1@test.com',
  },
  {
    id: '2',
    login_id: 'officer2',
    type_name: 'Admin',
    first_name: 'Jane',
    last_name: 'Doe',
    officer_email: 'officer2@test.com',
  },
  {
    id: '3',
    login_id: 'officer3',
    type_name: 'Admin',
    first_name: 'Michael',
    last_name: 'Smith',
    officer_email: 'officer1@test.com',
  },
];
