import { mongoose } from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  cover: String,
  createdAt: Date,
  updatedAt: Date,
});
