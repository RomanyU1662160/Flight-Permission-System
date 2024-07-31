import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const objectId = Schema.ObjectId;

export interface City {
  _id: mongoose.Types.ObjectId;
  name: string;

  location: {
    type: string;
    coordinates: [number, number];
  };
  country_id: mongoose.Types.ObjectId;
}

const citySchema = new Schema<City>({
  name: { type: String, required: true },
  country_id: { type: objectId, ref: 'Country', required: true },
  location: {
    type: { type: String, default: 'Point' }, //Always "Point" for a single point on the map.
    coordinates: { type: [Number], required: true },
    index: '2dsphere', // Add a 2dsphere index for efficient geo queries
  },
});

export const City = model<City>('City', citySchema);
