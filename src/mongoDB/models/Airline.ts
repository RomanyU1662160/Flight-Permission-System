import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const objectId = Schema.ObjectId;

export interface Airline {
  _id: mongoose.Types.ObjectId;
  airline_name: string;
  icao_code: string;
  iata_code: string;
  agent_id: mongoose.Types.ObjectId;
  country_id: mongoose.Types.ObjectId;
  contact_info?: string;
  users?: mongoose.Types.ObjectId[];
}

const airlineSchema = new Schema<Airline>({
  airline_name: { type: String, required: true },
  icao_code: { type: String, required: true, unique: true },
  iata_code: { type: String, required: true, unique: true },
  contact_info: { type: String, required: false },
  agent_id: { type: objectId, ref: 'Agent' },
  country_id: { type: objectId, ref: 'Country' },
  users: [{ type: objectId, ref: 'User' }],
});

export const Airline = model<Airline>('Airline', airlineSchema);
