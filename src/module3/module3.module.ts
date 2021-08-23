import { DynamicModule, Module } from '@nestjs/common';
import { Service3Service } from './service3.service';

export interface Module3Options {
  c: string;
}

export const MODULE_3_OPTIONS_TOKEN = 'MODULE_3_OPTIONS_TOKEN';
export const MODULE_3_ASYNC_PROVIDER = 'MODULE_3_ASYNC_PROVIDER';
@Module({})
export class Module3Module {
  static forRoot(options: Module3Options): DynamicModule {
    return {
      module: Module3Module,
      providers: [
        {
          provide: MODULE_3_OPTIONS_TOKEN,
          useValue: options,
        },
        Service3Service,
        {
          provide: MODULE_3_ASYNC_PROVIDER,
          useFactory: async options => {
            console.log(
              `module 3 usefactory async ${JSON.stringify(options, null, 4)}`,
            );
            return 'asyncfactory';
          },
          inject: [MODULE_3_OPTIONS_TOKEN],
        },
      ],
      exports: [Service3Service],
    };
  }
}
