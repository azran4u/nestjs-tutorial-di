import { Injectable } from '@nestjs/common';
import { Service3Service } from './module3/service3.service';

@Injectable()
export class AppService {
  constructor(private service3: Service3Service) {}
}
