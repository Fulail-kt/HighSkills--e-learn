import { Inject, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { course } from 'src/entities/courseEntity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
    constructor(   @InjectRepository(course)
    private courseRepository: Repository<course>,) {}


    async getCourse(id?: number|any): Promise<course | course[]> {
        if (id) {
            const selected={
                where:{
                    id
                }
            }
          return await this.courseRepository.findOne(selected); 
        }
        return this.courseRepository.find();
      }

   async createCourse(data:any){
        const course = this.courseRepository.create(data);
        await this.courseRepository.save(course);
        return "successFull created course"
    }

   async updateCourse(id:string,course:any){
       await this.courseRepository.update(id,course)
    }
}
