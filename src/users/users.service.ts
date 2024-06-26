import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUserRequest from './dto/createUser.dto';
import User from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new NotFoundException('User with this email does not exist');
    }

    return user;
  }

  async create(userData: CreateUserRequest) {
    const newUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException('User with this id does not exist');
    }

    return user;
  }
}
