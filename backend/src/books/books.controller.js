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
import { BooksService } from './books.service';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
@Dependencies(BooksService)
export class BooksController {
  constructor(booksService) {
    this.booksService = booksService;
  }

  @Get('')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async getAll(request, response) {
    return response.status(200).json(await this.booksService.findAll());
  }

  @Post('')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(
    FileInterceptor('cover', {
      storage: diskStorage({
        destination: './uploads/books',
        filename: function (req, file, cb) {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    }),
  )
  async create(request, response, body, file) {
    body.cover = file.filename;
    return response.status(200).json(await this.booksService.create(body));
  }

  @Put('/:id')
  @Bind(Req(), Res(), Body(), UploadedFile())
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(
    FileInterceptor('cover', {
      storage: diskStorage({
        destination: './uploads/books',
        filename: function (req, file, cb) {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    }),
  )
  async update(request, response, body, file) {
    if (file && file.filename != '') {
      body.cover = file.filename;
    }

    return response
      .status(200)
      .json(await this.booksService.update(request.params.id, body));
  }

  @Delete('/:id')
  @Bind(Req(), Res())
  @UseGuards(AuthGuard('jwt'))
  async delete(request, response) {
    return response
      .status(200)
      .json(await this.booksService.delete(request.params.id));
  }
}
