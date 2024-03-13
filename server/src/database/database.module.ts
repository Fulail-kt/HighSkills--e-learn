import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/userEntity';
import { DatabaseService } from './database.service';

@Module({
 imports: [TypeOrmModule.forFeature([UserEntity])],
 providers: [DatabaseService],
 exports: [DatabaseService],
})
export class DatabaseModule {}
