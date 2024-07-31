import { AirportTypes } from '@/DB/types';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const objectId = Schema.ObjectId;

export interface Airport {
  _id: mongoose.Types.ObjectId; // Include _id for better type safety
  name: string;
  iata_code: string;
  icao_code: string;
  airport_type: AirportTypes;
  country_id: mongoose.Types.ObjectId;
  location: {
    type: string;
    coordinates: [number, number];
  };
}

const AirportSchema = new Schema<Airport>({
  name: { type: String, required: true },
  airport_type: { type: String, enum: AirportTypes, required: false },
  iata_code: { type: String, required: true, unique: true },
  icao_code: { type: String, required: true, unique: true },
  country_id: { type: objectId, ref: 'Country', required: true },
});

export const Airport = model<Airport>('Airport', AirportSchema);
