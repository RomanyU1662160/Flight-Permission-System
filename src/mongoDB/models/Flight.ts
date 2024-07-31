import { FlightTypes } from '@/DB/types';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const objectId = Schema.ObjectId;

export interface FlightPlan {
  _id: mongoose.Types.ObjectId;
  flight_number: string;
  flight_purpose: FlightTypes;
  departure_date: Date;
  arrival_date: Date;
  isSchedule: boolean;
  slug: string;
  route: string;
  airline_id: mongoose.Types.ObjectId;
  aircraft_id: mongoose.Types.ObjectId;
  departure_airport_id: mongoose.Types.ObjectId;
  arrival_airport_id: mongoose.Types.ObjectId;
}

const FlightPlanSchema = new Schema<FlightPlan>({
  flight_number: String,
  flight_purpose: {
    type: String,
    enum: FlightTypes,
  },
  departure_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  arrival_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  isSchedule: {
    type: Boolean,
    default: false,
  },
  slug: String,
  route: String,
  airline_id: {
    type: objectId,
    ref: 'Airline',
    required: true,
  },
  aircraft_id: {
    type: objectId,
    ref: 'Airline',
    required: true,
  },
  departure_airport_id: {
    type: objectId,
    ref: 'Airport',
    required: true,
  },
  arrival_airport_id: {
    type: objectId,
    ref: 'Airport',
    required: true,
  },
});

export const FlightPlan = model<FlightPlan>('FlightPlan', FlightPlanSchema);
