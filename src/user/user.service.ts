import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async registerUser(username: string, phone: number, password: string): Promise<User> {
    console.log('test');
    const newUser = this.userRepository.create({ username, phone, password });
    console.log('newUser', newUser);
    return this.userRepository.save(newUser);
  }

  // async login(phone: string, password: string): Promise<User> {
  //   // 实现登录逻辑
  // }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}