import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1736182709628 implements MigrationInterface {
    name = 'CreateUserTable1736182709628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jornal" DROP CONSTRAINT "FK_a66ebcd3234a9d9f977d87bbc9d"`);
        await queryRunner.query(`ALTER TABLE "starategy" ADD "userIdId" int`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD "profileImage" nvarchar(max) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD "Descriotion" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "account" ADD "userIdId" int`);
        await queryRunner.query(`ALTER TABLE "starategy" ADD CONSTRAINT "FK_0d62ec187cb96412463e7253deb" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD CONSTRAINT "FK_a66ebcd3234a9d9f977d87bbc9d" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_f3b3cc282091806bc6775a83411" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_f3b3cc282091806bc6775a83411"`);
        await queryRunner.query(`ALTER TABLE "jornal" DROP CONSTRAINT "FK_a66ebcd3234a9d9f977d87bbc9d"`);
        await queryRunner.query(`ALTER TABLE "starategy" DROP CONSTRAINT "FK_0d62ec187cb96412463e7253deb"`);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "jornal" DROP COLUMN "Descriotion"`);
        await queryRunner.query(`ALTER TABLE "jornal" DROP COLUMN "profileImage"`);
        await queryRunner.query(`ALTER TABLE "starategy" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD CONSTRAINT "FK_a66ebcd3234a9d9f977d87bbc9d" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
