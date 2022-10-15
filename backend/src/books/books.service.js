import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';

@Injectable()
@Dependencies(getModelToken('Book'))
export class BooksService {
  constructor(bookModel) {
    this.bookModel = bookModel;
  }

  async findAll() {
    return this.bookModel.find().exec();
  }

  async count() {
    return this.bookModel.countDocuments({});
  }

  async create(bookData) {
    bookData.createdAt = Date.now();
    bookData.updatedAt = Date.now();

    const createdBook = new this.bookModel(bookData);
    return createdBook.save();
  }

  async update(bookId, bookData) {
    bookData.updatedAt = Date.now();

    const updatedBook = this.bookModel.findOneAndUpdate(
      { _id: bookId },
      bookData,
      { new: true },
    );

    return updatedBook;
  }

  async delete(bookId) {
    const deletedBook = this.bookModel.deleteOne({ _id: bookId });

    return deletedBook;
  }
}
