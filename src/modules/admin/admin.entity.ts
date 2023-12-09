import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class Admin {
  @Expose()
  @IsNotEmpty()
  id: number;

  @Expose()
  @IsNotEmpty()
  email: string;

  @Expose()
  @IsNotEmpty()
  password: string;

  @Expose()
  @IsNotEmpty()
  master: boolean;
}
