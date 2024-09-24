import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  create(CreateUserDto: CreateUserDto) {
    this.users.push(CreateUserDto);
    return CreateUserDto;
  }

  findAll() {
    return this.users;
  }
}
