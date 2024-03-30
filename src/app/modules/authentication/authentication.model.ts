import { Schema, model } from 'mongoose';
import { ISignup } from './authentication.interface';

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

export const userSchema = new Schema<ISignup>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    notes: [noteSchema]
},
{
    // Automatic give the field called createdAt and updatedAt
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export const AuthenticationModel = model<ISignup>('users', userSchema);
