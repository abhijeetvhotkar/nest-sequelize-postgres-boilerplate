import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());

  const options = new DocumentBuilder()
    .setTitle('Boilerplate')
    .setDescription('The NestJS Sequelize Postgres API documentation')
    .setVersion('1.0')
    .addTag('boilerplate')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('backend', app, document);
  await app.listen(3000);
}
bootstrap();
