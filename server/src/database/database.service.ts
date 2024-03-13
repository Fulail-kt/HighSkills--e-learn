import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/userEntity';
import { Repository } from 'typeorm';


@Injectable()
export class DatabaseService implements OnModuleInit {
 constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
 ) {}

 async onModuleInit() {
    console.log('Database connected successfully');
 }
}
