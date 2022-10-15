import { mongoose } from 'mongoose';
import * as dotenv from 'dotenv';
import { UserSchema } from '../src/users/schemas/user.schema';

dotenv.config();
mongoose.connect(process.env.DATABASE_HOST);

const User = mongoose.model('User', UserSchema);

const Admin = new User();

Admin.name = 'Mohamed Yousef';
Admin.email = 'engineer.mohamed.yossef@gmail.com';
Admin.password = '12345678';
Admin.linkedin = '';
Admin.github = '';
Admin.bio = '';
Admin.createdAt = Date.now();
Admin.updatedAt = Date.now();

Admin.save(function (err) {
  console.log('User Seeder Done!');
  mongoose.connection.close();
});
