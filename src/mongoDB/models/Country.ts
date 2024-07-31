import mongoose from 'mongoose';
import { Airport } from './Airport';

const { Schema, model } = mongoose;
const objectId = Schema.ObjectId;

export interface Country {
  _id: mongoose.Types.ObjectId;
  name: string;
  //The ISO 3166-1 alpha-2 country code (e.g., "GB" for the United Kingdom).
  iso_code: string;
  airports: Airport[];
}

const countrySchema = new Schema<Country>({
  name: { type: String, required: true },
  iso_code: { type: String, required: true, unique: true },
  airports: [{ type: objectId, ref: 'Airport' }],
});
