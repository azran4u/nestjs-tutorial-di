import { Module } from '@nestjs/common';
import { Module1Module } from '../module1/module1.module';
import { Service2Service } from './service2.service';

@Module({
  imports: [Module1Module],
  providers: [Service2Service],
  exports: [Service2Service],
})
export class Module2Module {}
