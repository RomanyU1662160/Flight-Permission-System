import { UserRoles } from '@/DB/types';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const objectId = Schema.ObjectId;

export interface User {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: UserRoles;
  createdAt: Date;
  updatedAt: Date;
  last_login_at: Date;
  last_login_ip?: string;
  agent_id?: mongoose.Types.ObjectId;
  airline_id?: mongoose.Types.ObjectId;
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: UserRoles.Viewer },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  last_login_at: { type: Date, default: Date.now },
  last_login_ip: { type: String },
  agent_id: { type: objectId, ref: 'Agent' },
  airline_id: { type: objectId, ref: 'Airline' },
});

export const User = model<User>('User', UserSchema);
