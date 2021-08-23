import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {
  async f() {
    return 'service1 async function';
  }

  g() {
    return 'service1 non async function';
  }
}
