import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';

@Injectable()
@Dependencies(getModelToken('Project'))
export class ProjectsService {
  constructor(projectModel) {
    this.projectModel = projectModel;
  }

  async findAll() {
    return this.projectModel.find().exec();
  }

  async count() {
    return this.projectModel.countDocuments({});
  }

  async create(projectData) {
    projectData.createdAt = Date.now();
    projectData.updatedAt = Date.now();

    const createdProject = new this.projectModel(projectData);
    return createdProject.save();
  }

  async update(projectId, projectData) {
    projectData.updatedAt = Date.now();

    const updatedProject = this.projectModel.findOneAndUpdate(
      { _id: projectId },
      projectData,
      { new: true },
    );

    return updatedProject;
  }

  async delete(projectId) {
    const deletedProject = this.projectModel.deleteOne({ _id: projectId });

    return deletedProject;
  }
}
