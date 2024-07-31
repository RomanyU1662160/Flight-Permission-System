import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const objectId = Schema.ObjectId;

export interface Note {
  _id: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
  commenter_id: mongoose.Types.ObjectId;
  permission_id: mongoose.Types.ObjectId;
}

const noteSchema = new Schema<Note>({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  commenter_id: { type: objectId, ref: 'User', required: true },
  permission_id: { type: objectId, ref: 'Permission', required: true },
});

export const Note = model<Note>('Note', noteSchema);
