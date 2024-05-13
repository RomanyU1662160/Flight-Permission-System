import { Officer } from '../types';

const officers: Array<Omit<Officer, 'officer_password'>> = [
  {
    officer_id: '1',
    login_id: 'officer1',
    type_name: 'Admin',
    first_name: 'John',
    last_name: 'Doe',
    officer_email: 'officer1@test.com',
  },
  {
    officer_id: '2',
    login_id: 'officer2',
    type_name: 'Admin',
    first_name: 'Jane',
    last_name: 'Doe',
    officer_email: 'officer2@test.com',
  },
  {
    officer_id: '3',
    login_id: 'officer3',
    type_name: 'Admin',
    first_name: 'Michael',
    last_name: 'Smith',
    officer_email: 'officer1@test.com',
  },
];
