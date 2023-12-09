import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admin' })
export class AdminOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: false })
  master: boolean;
}
