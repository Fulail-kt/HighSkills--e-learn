import { Inject, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entities/courseEntity';
import { Repository } from 'typeorm';
import  admin from 'firebase-admin'
import  File  from 'multer';

@Injectable()
export class CourseService {
    constructor(   @InjectRepository(Course)
    private courseRepository: Repository<Course>,) {}


    async getCourse(id?: number|any): Promise<Course | Course[]> {
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
        console.log(data,"dsalfdksaoasfsoialjka")
        const course = this.courseRepository.create(data);
        await this.courseRepository.save(course);
        return "successFull created course"
    }

   async updateCourse(id:string,course:any){
       await this.courseRepository.update(id,course)
    }
}
