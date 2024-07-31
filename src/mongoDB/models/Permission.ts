import { PermissionStatus } from '@/DB/types';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const objectId = Schema.ObjectId;

export interface Permission {
  _id: mongoose.Types.ObjectId;
  status: PermissionStatus;
  submitted_at: Date;
  last_update_at: Date;
  airline_id: mongoose.Types.ObjectId; // if airline has agent, we can define a relation between agent and airline
  flight_id: mongoose.Types.ObjectId;
  officer_id: mongoose.Types.ObjectId;
  notes?: mongoose.Types.ObjectId[];
}

const permissionSchema = new Schema<Permission>({
  status: {
    type: String,
    enum: PermissionStatus,
    required: true,
  },
  submitted_at: { type: Date, required: true },
  last_update_at: { type: Date, required: true },
  airline_id: { type: objectId, ref: 'Agent', required: true },
  flight_id: { type: objectId, ref: 'Flight', required: true },
  officer_id: { type: objectId, ref: 'Officer', required: true },
  notes: [{ type: objectId, ref: 'Note' }],
});

const Permission = model<Permission>('Permission', permissionSchema);
export default Permission;
