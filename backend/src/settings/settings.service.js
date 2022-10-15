import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';

@Injectable()
@Dependencies(getModelToken('Setting'))
export class SettingsService {
  constructor(settingModel) {
    this.settingModel = settingModel;
  }

  async findAll() {
    return this.settingModel.find().exec();
  }

  async update(settingData) {
    const settings = await this.findAll();
    settingData.updatedAt = Date.now();

    const updatedSetting = this.settingModel.findOneAndUpdate(
      { _id: settings[0]._id },
      settingData,
      { new: true },
    );

    return updatedSetting;
  }
}
