import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminOrm } from './admin.orm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([AdminOrm])],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule implements OnModuleInit {
  constructor(private adminService: AdminService) {}

  async onModuleInit() {
    const hasAdminCreated = await this.adminService.hasAnyAdmin();

    if (!hasAdminCreated) {
      await this.adminService.register({
        email: process.env.OAUTHER_ADMIN_EMAIL,
        password: process.env.OAUTHER_ADMIN_PASSWORD,
        master: true,
      });
    }
  }
}
