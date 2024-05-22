import { Body, Controller, Get, Param, Patch, Post, Query, Req, Session } from '@nestjs/common';
import { CourseService } from './course.service';


@Controller('course')
export class CourseController {
    constructor(private readonly courseService:CourseService){}

    @Get()
    getCourse(@Query("id") id?:any,){
        return this.courseService.getCourse(id)
    }

    @Post()
    createCourse(@Body() body: any) {
       
        return this.courseService.createCourse(body);
    }

    @Patch(':id')
    updateCourse(@Param() id:any ,@Body() course:{name:any,price:any,description:any,module:any[]}){
        return this.courseService.updateCourse(id,course)
    }

}
