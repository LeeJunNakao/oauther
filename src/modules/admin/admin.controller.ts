import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  Res,
  Req,
  UseGuards,
  Redirect,
  UseFilters,
  Session,
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { LoginDto } from './dto/authentication.dto';
import { Request } from './interfaces';
import { AuthenticationGuard } from './admin.guards';
import { HttpExceptionFilter } from './admin.filter';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  @UseGuards(AuthenticationGuard)
  async home(@Req() req: Request) {
    return { message: 'Welcome to home page!' };
  }

  @Get('/login')
  @Render('Login')
  async loginPage(@Session() session: any) {}

  @Get('/register')
  @Render('Register')
  async registerPage() {}

  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { sessionData } = await this.adminService.login(loginDto);

      req.session.adminId = sessionData.adminId;

      res.redirect('/admin');
    } catch (error) {
      res.redirect('/admin/login');
    }
  }
}
