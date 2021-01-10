import {Controller, Get} from '@nestjs/common';
import get = Reflect.get;

@Controller('')
export class AppController {
  @Get('/')
  getApp() {
    return 'Welcome to my Movie API';
  }
}
