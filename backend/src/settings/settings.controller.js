import {
  Controller,
  Dependencies,
  Bind,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SettingsService } from './settings.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('settings')
@Dependencies(SettingsService)
export class SettingsController {
  constructor(settingsService) {
    this.settingsService = settingsService;
  }

  @Get('')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async getAll(request, response) {
    return response.status(200).json(await this.settingsService.findAll());
  }

  @Put('')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  async update(request, response, body, file) {
    return response
      .status(200)
      .json(await this.settingsService.update(body));
  }
}
