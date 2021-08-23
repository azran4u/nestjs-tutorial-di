import { Inject, Injectable } from '@nestjs/common';
import { Service1Service } from '../module1/service1.service';

@Injectable()
export class Service2Service {
  constructor(
    private service1: Service1Service,
    @Inject('PROVIDE_HELLO') private hello: Object,
    @Inject('AFREP_SAVE_TO_DATABASE') private s: string,
  ) {}
  async f() {
    return `service2 async function ${await this.service1.f()} ${this.service1.g()} ${JSON.stringify(
      this.hello,
      null,
      4,
    )} ${this.s}`;
  }

  g() {
    this.service1.g();
    return 'service2 non async function';
  }
}
