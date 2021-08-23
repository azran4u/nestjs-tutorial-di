import { Inject, Injectable } from '@nestjs/common';
import {
  Module3Options,
  MODULE_3_ASYNC_PROVIDER,
  MODULE_3_OPTIONS_TOKEN,
} from './module3.module';

@Injectable()
export class Service3Service {
  constructor(
    @Inject(MODULE_3_OPTIONS_TOKEN) private options: Module3Options,
    @Inject(MODULE_3_ASYNC_PROVIDER) private asyncprovider: string,
  ) {
    console.log(`service 3 options ${JSON.stringify(this.options, null, 4)}`);
  }
}
