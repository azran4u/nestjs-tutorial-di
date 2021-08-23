import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Service2Service } from './module2/service2.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const service2 = app.get(Service2Service);
  const f = await service2.f();
  console.log(f);
}
bootstrap();
