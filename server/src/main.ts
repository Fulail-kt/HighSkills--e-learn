import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import session = require('express-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:'http://localhost:3001'})
  app.use(session({
    secret:'secret111',
    resave:false,
    saveUninitialized:false
  }))
  await app.listen(3000);
}
bootstrap();
