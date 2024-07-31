import mongoose from 'mongoose';
import { Airline } from './Airline';

const { Schema, model } = mongoose;
const objectId = Schema.ObjectId;

export interface Agent {
  _id: mongoose.Types.ObjectId;
  name: string;
  address: string;
  contact_info: string;
  phone_number: string;
  airlines: Airline[];
  users: mongoose.Types.ObjectId[];
}

const agentSchema = new Schema<Agent>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact_info: { type: String, required: true },
  phone_number: { type: String, required: true },
  airlines: [{ type: objectId, ref: 'Airline' }],
  users: [{ type: objectId, ref: 'User' }],
});

const Agent = model<Agent>('Agent', agentSchema);
