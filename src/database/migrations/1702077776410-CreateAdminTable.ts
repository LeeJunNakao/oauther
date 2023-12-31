import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdminTable1702077776410 implements MigrationInterface {
  name = 'CreateAdminTable1702077776410';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "admin" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "master" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "admin"`);
  }
}
