import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1737218485613 implements MigrationInterface {
    name = 'CreateUserTable1737218485613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jornal" DROP COLUMN "ReasonsForEntry"`);
        await queryRunner.query(`ALTER TABLE "Approvals" ADD "UserId" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jornal" DROP COLUMN "profileImage"`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD "profileImage" nvarchar(max)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jornal" DROP COLUMN "profileImage"`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD "profileImage" nvarchar(MAX) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Approvals" DROP COLUMN "UserId"`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD "ReasonsForEntry" nvarchar(255) NOT NULL`);
    }

}
