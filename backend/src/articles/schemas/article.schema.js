import { mongoose } from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  keywords: String,
  cover: String,
  body: String,
  createdAt: Date,
  updatedAt: Date,
});
