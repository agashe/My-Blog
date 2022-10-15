import { mongoose } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  linkedin: String,
  github: String,
  bio: String,
  createdAt: Date,
  updatedAt: Date,
});
