import { mongoose } from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: String,
  repository: String,
  createdAt: Date,
  updatedAt: Date,
});
