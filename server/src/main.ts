// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// import session = require('express-session');

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors({origin:'http://localhost:3000'})
//   app.use(session({
//     secret:'secret111',
//     resave:false,
//     saveUninitialized:false
//   }))
//   await app.listen(3001);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure CORS for all origins (development-friendly)
  app.use(cors({
    origin: true,
    credentials: true, // Allow cookies for cross-origin requests (if applicable)
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Customize allowed headers as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed HTTP methods
  }));

  // OR

  // Configure CORS for specific origins (production-ready)
  const allowedOrigins = ['http://localhost:3000']; // Replace with your allowed origins
  app.use(cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true); // Allow requests with no origin header (modern browsers)
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        return callback(new Error('Origin not allowed by CORS'));
      }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }));

  await app.listen(3001); // Replace with your desired port
}

bootstrap();
