import { Module, Scope } from '@nestjs/common';
import { Service1Service } from './service1.service';

export interface MyOptions {
  a: string;
}
@Module({
  providers: [
    Service1Service,
    {
      provide: 'PROVIDE_HELLO',
      useValue: { hi: 'hello' },
    },
    {
      provide: 'AFREP_SAVE_TO_DATABASE',
      scope: Scope.DEFAULT,
      useFactory: async (options: MyOptions) => {
        return 'a';
      },
    },
  ],
  exports: [Service1Service, 'PROVIDE_HELLO', 'AFREP_SAVE_TO_DATABASE'],
})
export class Module1Module {}
