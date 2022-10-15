import { mongoose } from 'mongoose';

export const SettingSchema = new mongoose.Schema({
  putSiteInMaintenance: Boolean,
});
