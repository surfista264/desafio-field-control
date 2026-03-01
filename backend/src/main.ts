import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // AQUI É O LUGAR CERTO!
  app.enableCors(); 
  
  await app.listen(3000);
}
bootstrap();
