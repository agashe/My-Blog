import {
  Controller,
  Dependencies,
  Bind,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { ArticlesService } from '../articles/articles.service';
import { BooksService } from '../books/books.service';
import { ProjectsService } from '../projects/projects.service';
import { UsersService } from '../users/users.service';

@Controller('blog')
@Dependencies(
  ArticlesService,
  BooksService,
  ProjectsService,
  UsersService,
)
export class BlogController {
  constructor(
    articlesService,
    booksService,
    projectsService,
    usersService,
  ) {
    this.articlesService = articlesService;
    this.booksService = booksService;
    this.projectsService = projectsService;
    this.usersService = usersService;
  }

  @Get('articles')
  @Bind(Req(), Res())
  async listArticles(request, response) {
    return response.status(200).json(await this.articlesService.findAll());
  }

  @Get('articles/:title')
  @Bind(Req(), Res())
  async showArticle(request, response) {
    const title = request.params.title.replace(/_/g, ' ');
    return response.status(200).json(await this.articlesService.find({title: title}));
  }

  @Get('books')
  @Bind(Req(), Res())
  async listBooks(request, response) {
    return response.status(200).json(await this.booksService.findAll());
  }

  @Get('projects')
  @Bind(Req(), Res())
  async listProjects(request, response) {
    return response.status(200).json(await this.projectsService.findAll());
  }

  @Get('about')
  @Bind(Req(), Res())
  async about(request, response) {
    const userData = await this.usersService.find();
    return response.status(200).json({
      linkedin: userData.linkedin,
      github: userData.github,
      bio: userData.bio,
    });
  }
}
