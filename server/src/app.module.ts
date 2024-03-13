import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/userEntity';
import { course } from './entities/courseEntity';


@Module({
  imports: [AuthModule, CourseModule, AdminModule, DatabaseModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mysql',
    database: 'Elearn',
    entities: [UserEntity,course ],
    synchronize: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}


