import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';

@Injectable()
@Dependencies(getModelToken('User'))
export class UsersService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async find() {
    return this.userModel.findOne().exec();
  }

  async update(userId, userData) {
    userData.updatedAt = Date.now();

    const updatedUser = this.userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      { new: true },
    );

    return updatedUser;
  }
}
