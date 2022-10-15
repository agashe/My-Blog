import {
  Controller,
  Dependencies,
  Bind,
  Get,
  Post,
  Req,
  Res,
  Body,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { ArticlesService } from './articles/articles.service';
import { BooksService } from './books/books.service';
import { ProjectsService, projectsService } from './projects/projects.service';

@Controller('')
@Dependencies(
  AuthService,
  ArticlesService,
  BooksService,
  ProjectsService,
)
export class AppController {
  constructor(
    authService,
    articlesService,
    booksService,
    projectsService
  ) {
    this.authService = authService;
    this.articlesService = articlesService;
    this.booksService = booksService;
    this.projectsService = projectsService;
  }

  @Get('dashboard')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async dashboard(request, response) {
    return response.status(200).json({
      articlesCount: await this.articlesService.count(),
      booksCount: await this.booksService.count(),
      projectsCount: await this.projectsService.count(),
    });
  }

  @Post('auth/login')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseGuards(AuthGuard('local'))
  async login(request, response, body, file) {
    const accessToken = await this.authService.login(request.user);
    return response.status(200).json(accessToken);
  }
}
