import { Injectable } from '@nestjs/common';
import { AdminService } from './modules/admin/admin.service';

@Injectable()
export class AppService {
  constructor(private adminService: AdminService) {}

  async hasAnyAdmin() {
    const admins = await this.adminService.findBy();

    return admins.length > 0;
  }
}
