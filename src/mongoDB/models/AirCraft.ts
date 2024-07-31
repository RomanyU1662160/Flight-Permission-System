import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const objectId = Schema.ObjectId;

export interface AirCraft {
  _id: mongoose.Types.ObjectId;
  registration: string;
  model: string;
  type: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
  capacity?: number;
  owner_id: mongoose.Types.ObjectId;
  country_id: mongoose.Types.ObjectId;
}

const AirCraftSchema = new Schema<AirCraft>({
  registration: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  isPrivate: { type: Boolean, required: true, default: false },
  capacity: { type: Number, required: false },
  owner_id: { type: objectId, ref: 'User', required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  country_id: { type: objectId, ref: 'Country', required: false },
});

const AirCraft = model<AirCraft>('AirCraft', AirCraftSchema);
export default AirCraft;
