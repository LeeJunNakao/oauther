import { NestFactory } from '@nestjs/core';
import register from '@react-ssr/nestjs-express/register';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';
import { v4 as uuid } from 'uuid';
import { AppModule } from './app.module';
import { ValidationPipe } from './app.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      name: 'OAUTHER_ADMIN_SESSION',
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      genid: () => uuid(),
    }),
  );

  await register(app);

  await app.listen(process.env.PORT);
}
bootstrap();
