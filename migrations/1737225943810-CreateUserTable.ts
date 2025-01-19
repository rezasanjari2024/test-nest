import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1737225943810 implements MigrationInterface {
    name = 'CreateUserTable1737225943810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jornal" ADD "feelings" ntext NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jornal" DROP COLUMN "feelings"`);
    }

}
