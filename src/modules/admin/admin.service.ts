import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { AdminOrm } from './admin.orm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginDto } from './dto/authentication.dto';
import { Admin } from './admin.entity';
import {
  InexistentUserException,
  InvalidCredentialsException,
} from './exceptions/authentication';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminOrm) private repository: Repository<AdminOrm>,
  ) {}

  async findBy(params: Partial<Admin> = {}) {
    const admins = await this.repository.findBy(params);

    return admins;
  }

  async hasAnyAdmin() {
    const admins = await this.findBy();

    return admins.length > 0;
  }

  async validatePassword(password: string, hashedPassword: string) {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (!passwordMatch) {
      throw new InvalidCredentialsException();
    }
  }

  async register(createAdminDto: CreateAdminDto) {
    const dto = {
      email: createAdminDto.email,
      password: await bcrypt.hash(createAdminDto.password, 10),
      master: createAdminDto.master,
    };

    const admin = this.repository.create(dto);

    await this.repository.save(admin);
  }

  async login(loginDto: LoginDto) {
    const user = await this.repository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new InexistentUserException();
    }

    await this.validatePassword(loginDto.password, user.password);

    return {
      sessionData: {
        adminId: user.id,
        email: user.email,
        isMaster: user.master,
      },
    };
  }
}
