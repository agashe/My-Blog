import { mongoose } from 'mongoose';
import * as dotenv from 'dotenv';
import { SettingSchema } from '../src/settings/schemas/setting.schema';

dotenv.config();
mongoose.connect(process.env.DATABASE_HOST);

const SettingModal = mongoose.model('Setting', SettingSchema);

const Settings = new SettingModal();

Settings.putSiteInMaintenance = false;

Settings.save(function (err) {
  console.log('Settings Seeder Done!');
  mongoose.connection.close();
});
