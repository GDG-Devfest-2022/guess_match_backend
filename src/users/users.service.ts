import { Injectable, InternalServerErrorException } from '@nestjs/common';
import prisma from 'src/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await prisma.user.create({ data: { ...createUserDto } });

      return user;
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findoneByGoogleId(googleId: number) {
    try {
      const user = await prisma.user.findUnique({ where: { googleId } });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
