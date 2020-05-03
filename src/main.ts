import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  let options = new DocumentBuilder()
    .setTitle('Social Network')
    .setDescription('A simple api for social network')
    .setVersion('1.0')
    .addTag('users')
    .build();

  let document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
