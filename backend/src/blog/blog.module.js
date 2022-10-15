import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { ArticlesModule } from '../articles/articles.module';
import { BooksModule } from '../books/books.module';
import { ProjectsModule } from '../projects/projects.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ArticlesModule, 
    BooksModule, 
    ProjectsModule, 
    UsersModule
  ],
  controllers: [BlogController],
})
export class BlogModule {}
