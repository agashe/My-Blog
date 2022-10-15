import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';

@Injectable()
@Dependencies(getModelToken('Article'))
export class ArticlesService {
  constructor(articleModel) {
    this.articleModel = articleModel;
  }

  async findAll() {
    return this.articleModel.find().exec();
  }

  async find(query) {
    return this.articleModel.find(query).exec();
  }

  async count() {
    return this.articleModel.countDocuments({});
  }

  async create(articleData) {
    articleData.createdAt = Date.now();
    articleData.updatedAt = Date.now();

    const createdArticle = new this.articleModel(articleData);
    return createdArticle.save();
  }

  async update(articleId, articleData) {
    articleData.updatedAt = Date.now();

    const updatedArticle = this.articleModel.findOneAndUpdate(
      { _id: articleId },
      articleData,
      { new: true },
    );

    return updatedArticle;
  }

  async delete(articleId) {
    const deletedArticle = this.articleModel.deleteOne({ _id: articleId });

    return deletedArticle;
  }
}
