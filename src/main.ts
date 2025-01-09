import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('cats')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
