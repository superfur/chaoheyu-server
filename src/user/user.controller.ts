import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  test() {
    return 'test';
  }

  @Post('register')
  async registerUser(@Body('username') username: string, @Body('phone') phone: number, @Body('password') password: string): Promise<User> {
    return this.userService.registerUser(username, phone, password);
  }

  // @Post('login')
  // async login(@Body() body: { phone: string, password: string }) {
  //   return this.userService.login(body.phone, body.password);
  // }
}