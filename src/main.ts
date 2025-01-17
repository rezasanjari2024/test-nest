import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './helper/filters/http-exception.filter';
import * as csurf from 'csurf';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('cats')
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }) // تنظیم به شکل مناسب

  .build();

  const document = SwaggerModule.createDocument(app, config);
  app.enableCors({
    origin: '*', // یا آدرس‌های خاص که می‌خواهید از آنها درخواست‌ها پذیرفته شود
    allowedHeaders: 'Authorization, Content-Type', // افزودن هدر Authorization
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.use(
  //   csurf({
  //     cookie: true, // CSRF token در کوکی ذخیره می‌شود
  //   }),
  // );
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(5000);
}
bootstrap();
