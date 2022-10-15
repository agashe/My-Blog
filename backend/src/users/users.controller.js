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
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  @Get('')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async getAll(request, response) {
    return response.status(200).json(await this.usersService.find());
  }

  @Put('/:id')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('jwt'))
  async update(request, response, body, file) {
    return response
      .status(200)
      .json(await this.usersService.update(request.params.id, body));
  }
}
