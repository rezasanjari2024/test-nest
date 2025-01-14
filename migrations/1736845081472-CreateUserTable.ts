import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1736845081472 implements MigrationInterface {
    name = 'CreateUserTable1736845081472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feelings" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_69d9cff0d04ea928e0f626199e2" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_2edb005e9517bb0f42309864e5f" DEFAULT getdate(), "Title" nvarchar(255) NOT NULL, CONSTRAINT "PK_174edb69f26f6fbcc7f28dd9914" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "JournalFeelings" ("journalId" int NOT NULL, "feelingId" int NOT NULL, CONSTRAINT "PK_5101937d9f419fbd633699faf60" PRIMARY KEY ("journalId", "feelingId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_346a89307b20aced78a4d4b08a" ON "JournalFeelings" ("journalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_85e48227ce4200f32fdbd4432f" ON "JournalFeelings" ("feelingId") `);
        await queryRunner.query(`ALTER TABLE "JournalFeelings" ADD CONSTRAINT "FK_346a89307b20aced78a4d4b08ab" FOREIGN KEY ("journalId") REFERENCES "jornal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFeelings" ADD CONSTRAINT "FK_85e48227ce4200f32fdbd4432f1" FOREIGN KEY ("feelingId") REFERENCES "reasons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "JournalFeelings" DROP CONSTRAINT "FK_85e48227ce4200f32fdbd4432f1"`);
        await queryRunner.query(`ALTER TABLE "JournalFeelings" DROP CONSTRAINT "FK_346a89307b20aced78a4d4b08ab"`);
        await queryRunner.query(`DROP INDEX "IDX_85e48227ce4200f32fdbd4432f" ON "JournalFeelings"`);
        await queryRunner.query(`DROP INDEX "IDX_346a89307b20aced78a4d4b08a" ON "JournalFeelings"`);
        await queryRunner.query(`DROP TABLE "JournalFeelings"`);
        await queryRunner.query(`DROP TABLE "feelings"`);
    }

}
