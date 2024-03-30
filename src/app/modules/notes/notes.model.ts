import { Schema, model } from 'mongoose';
import { INotes } from './notes.interface';

export const noteSchema = new Schema<INotes>(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    // Automatic give the field called createdAt and updatedAt
    timestamps: true,
    toJSON:{
      virtuals: true
  }
  }
);


export const NotesModel = model<INotes>(
  'notes',
  noteSchema
);
