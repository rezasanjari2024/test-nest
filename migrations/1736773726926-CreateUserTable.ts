import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1736773726926 implements MigrationInterface {
    name = 'CreateUserTable1736773726926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reasons" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_78037e5af1f665a2271c2b301e0" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_7acacf31e0f04174fbc8d26fa08" DEFAULT getdate(), "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_b8104b87e316aacce0c709000a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "journalEntryReasons" ("journal_id" int NOT NULL, "reason_id" int NOT NULL, CONSTRAINT "PK_8441ba09d3edda1281941cd9325" PRIMARY KEY ("journal_id", "reason_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8550f0f72ee7a53927608ee447" ON "journalEntryReasons" ("journal_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9c193371fc93e8668c393387f0" ON "journalEntryReasons" ("reason_id") `);
        await queryRunner.query(`CREATE TABLE "JournalFailureReasons" ("journalId" int NOT NULL, "reasonId" int NOT NULL, CONSTRAINT "PK_c16baa93685942b9bc635bf7c8d" PRIMARY KEY ("journalId", "reasonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_caff2b72f125255ef0c0d292e4" ON "JournalFailureReasons" ("journalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cba948387c51d30d5c76187b98" ON "JournalFailureReasons" ("reasonId") `);
        await queryRunner.query(`ALTER TABLE "journalEntryReasons" ADD CONSTRAINT "FK_8550f0f72ee7a53927608ee447c" FOREIGN KEY ("journal_id") REFERENCES "jornal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "journalEntryReasons" ADD CONSTRAINT "FK_9c193371fc93e8668c393387f08" FOREIGN KEY ("reason_id") REFERENCES "reasons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" ADD CONSTRAINT "FK_caff2b72f125255ef0c0d292e4e" FOREIGN KEY ("journalId") REFERENCES "jornal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" ADD CONSTRAINT "FK_cba948387c51d30d5c76187b98d" FOREIGN KEY ("reasonId") REFERENCES "reasons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" DROP CONSTRAINT "FK_cba948387c51d30d5c76187b98d"`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" DROP CONSTRAINT "FK_caff2b72f125255ef0c0d292e4e"`);
        await queryRunner.query(`ALTER TABLE "journalEntryReasons" DROP CONSTRAINT "FK_9c193371fc93e8668c393387f08"`);
        await queryRunner.query(`ALTER TABLE "journalEntryReasons" DROP CONSTRAINT "FK_8550f0f72ee7a53927608ee447c"`);
        await queryRunner.query(`DROP INDEX "IDX_cba948387c51d30d5c76187b98" ON "JournalFailureReasons"`);
        await queryRunner.query(`DROP INDEX "IDX_caff2b72f125255ef0c0d292e4" ON "JournalFailureReasons"`);
        await queryRunner.query(`DROP TABLE "JournalFailureReasons"`);
        await queryRunner.query(`DROP INDEX "IDX_9c193371fc93e8668c393387f0" ON "journalEntryReasons"`);
        await queryRunner.query(`DROP INDEX "IDX_8550f0f72ee7a53927608ee447" ON "journalEntryReasons"`);
        await queryRunner.query(`DROP TABLE "journalEntryReasons"`);
        await queryRunner.query(`DROP TABLE "reasons"`);
    }

}
