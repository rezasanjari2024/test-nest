import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1736529729485 implements MigrationInterface {
    name = 'CreateUserTable1736529729485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "starategy" DROP CONSTRAINT "FK_0d62ec187cb96412463e7253deb"`);
        await queryRunner.query(`EXEC sp_rename "test.dbo.starategy.userIdId", "userId"`);
        await queryRunner.query(`ALTER TABLE "starategy" ADD CONSTRAINT "FK_5e07e112c79d0c5e1ea5a9d11b6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "starategy" DROP CONSTRAINT "FK_5e07e112c79d0c5e1ea5a9d11b6"`);
        await queryRunner.query(`EXEC sp_rename "test.dbo.starategy.userId", "userIdId"`);
        await queryRunner.query(`ALTER TABLE "starategy" ADD CONSTRAINT "FK_0d62ec187cb96412463e7253deb" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
