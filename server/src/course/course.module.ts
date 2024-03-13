import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from 'src/entities/courseEntity';

TypeOrmModule
@Module({
  imports:[TypeOrmModule.forFeature([course])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
