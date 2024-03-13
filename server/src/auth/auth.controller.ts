import { Body, Controller,Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor (private readonly authService:AuthService){}

    @Post()
    postSignUp(@Body() body:any){
        
        return this.authService.postSignUp(body)
    }

    @Post()
    postLogin(@Body() body:any){
     return this.authService.postLogin(body)
    }
    
}
