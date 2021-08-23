import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';

@Module({
  imports: [Module2Module, Module3Module.forRoot({ c: '5' })],
  providers: [AppService],
})
export class AppModule {
  
}
