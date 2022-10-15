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
import { ProjectsService } from './projects.service';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';

@Controller('projects')
@Dependencies(ProjectsService)
export class ProjectsController {
  constructor(projectsService) {
    this.projectsService = projectsService;
  }

  @Get('')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async getAll(request, response) {
    return response.status(200).json(await this.projectsService.findAll());
  }

  @Post('')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  async create(request, response, body, file) {
    return response.status(200).json(await this.projectsService.create(body));
  }

  @Put('/:id')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  async update(request, response, body, file) {
    return response
      .status(200)
      .json(await this.projectsService.update(request.params.id, body));
  }

  @Delete('/:id')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async delete(request, response) {
    return response
      .status(200)
      .json(await this.projectsService.delete(request.params.id));
  }
}
