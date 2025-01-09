import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1736279765599 implements MigrationInterface {
    name = 'CreateUserTable1736279765599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "UserName" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "UserName"`);
    }

}
