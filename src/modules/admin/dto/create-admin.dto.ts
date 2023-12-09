import { Expose } from 'class-transformer';
import { IsNotEmpty, IsBoolean, IsString } from 'class-validator';

export class CreateAdminDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Expose()
  @IsBoolean()
  master: boolean;
}
