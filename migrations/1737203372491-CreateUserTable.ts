import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1737203372491 implements MigrationInterface {
    name = 'CreateUserTable1737203372491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "isActive" bit NOT NULL CONSTRAINT "DF_fde2ce12ab12b02ae583dd76c7c" DEFAULT 1, "UserName" nvarchar(255) NOT NULL, "Profile" varbinary(MAX), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Approvals" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_230ba7e0976e987087f403f0734" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_be724dbace04c59a2f40cbace6e" DEFAULT getdate(), "Title" nvarchar(255) NOT NULL, CONSTRAINT "PK_79e10c3831242d5de95c8b37e24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "strategy" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_5b80c8d08193851b2445de80871" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_5e399967be66303d6ebc1ac9348" DEFAULT getdate(), "Name" nvarchar(255) NOT NULL, "Description" nvarchar(255) NOT NULL, "DoTime" nvarchar(255) NOT NULL, "UserId" int NOT NULL, "Symbol" ntext NOT NULL, CONSTRAINT "PK_733d2c3d4a73c020375b9b3581d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feelings" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_69d9cff0d04ea928e0f626199e2" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_2edb005e9517bb0f42309864e5f" DEFAULT getdate(), "Title" nvarchar(255) NOT NULL, CONSTRAINT "PK_174edb69f26f6fbcc7f28dd9914" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reasons" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_78037e5af1f665a2271c2b301e0" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_7acacf31e0f04174fbc8d26fa08" DEFAULT getdate(), "Name" nvarchar(255) NOT NULL, "UserId" int NOT NULL, CONSTRAINT "PK_b8104b87e316aacce0c709000a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_f50e152d11f027ee500dbad6c9c" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_13af9de5b924749d47952cd1d59" DEFAULT getdate(), "Balance" decimal(15,2) NOT NULL, "Broker" nvarchar(255) NOT NULL, "UserId" int NOT NULL, "strategyId" int, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jornal" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_c1f161012edcbf0d66ca39381df" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_d776f2826732fe11cab0cbd295e" DEFAULT getdate(), "SymboleId" nvarchar(255) NOT NULL, "UserId" int NOT NULL, "ReasonsForEntry" nvarchar(255) NOT NULL, "ResultAfterTp" nvarchar(255) NOT NULL, "ResultAfterRf" nvarchar(255) NOT NULL, "PercentageResult" float NOT NULL, "DollerResult" float NOT NULL, "Fee" float NOT NULL, "profileImage" nvarchar(max) NOT NULL, "Descriotion" nvarchar(255) NOT NULL, "accountId" int, CONSTRAINT "PK_b3ef768dca448f878031b3da8cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_fb91bea2d37140a877b775e6b2a" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c067eb835d38353bdf4cdaf3705" DEFAULT getdate(), "title" nvarchar(255) NOT NULL, "text" nvarchar(255) NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "approvals_strategies_strategy" ("approvalsId" int NOT NULL, "strategyId" int NOT NULL, CONSTRAINT "PK_9dd7858b6651c54ed014a310587" PRIMARY KEY ("approvalsId", "strategyId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f813f847a4a3e4c49e95f06fb5" ON "approvals_strategies_strategy" ("approvalsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f35960a463d100a1429816e269" ON "approvals_strategies_strategy" ("strategyId") `);
        await queryRunner.query(`CREATE TABLE "strategy_approvals_approvals" ("strategyId" int NOT NULL, "approvalsId" int NOT NULL, CONSTRAINT "PK_eb6001206e23aca17241028bd7b" PRIMARY KEY ("strategyId", "approvalsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5a002a8c13224dfccbf52af906" ON "strategy_approvals_approvals" ("strategyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_49128b3028ff1cb85a8f795cec" ON "strategy_approvals_approvals" ("approvalsId") `);
        await queryRunner.query(`CREATE TABLE "journalApproval" ("journal_id" int NOT NULL, "approval_id" int NOT NULL, CONSTRAINT "PK_5c11625d95a34c8dee9786572ff" PRIMARY KEY ("journal_id", "approval_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_94506f44abb6ff58ed7a372afa" ON "journalApproval" ("journal_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8b5b6b07f89c873c506fda773f" ON "journalApproval" ("approval_id") `);
        await queryRunner.query(`CREATE TABLE "JournalFailureReasons" ("journalId" int NOT NULL, "reasonId" int NOT NULL, CONSTRAINT "PK_c16baa93685942b9bc635bf7c8d" PRIMARY KEY ("journalId", "reasonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_caff2b72f125255ef0c0d292e4" ON "JournalFailureReasons" ("journalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cba948387c51d30d5c76187b98" ON "JournalFailureReasons" ("reasonId") `);
        await queryRunner.query(`CREATE TABLE "JournalFeelings" ("journalId" int NOT NULL, "feelingId" int NOT NULL, CONSTRAINT "PK_5101937d9f419fbd633699faf60" PRIMARY KEY ("journalId", "feelingId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_346a89307b20aced78a4d4b08a" ON "JournalFeelings" ("journalId") `);
        await queryRunner.query(`CREATE INDEX "IDX_85e48227ce4200f32fdbd4432f" ON "JournalFeelings" ("feelingId") `);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_9cab336eeec3022acf2de93e996" FOREIGN KEY ("strategyId") REFERENCES "strategy"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD CONSTRAINT "FK_9120cf34c810e6296e8f6a5eac7" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "approvals_strategies_strategy" ADD CONSTRAINT "FK_f813f847a4a3e4c49e95f06fb5c" FOREIGN KEY ("approvalsId") REFERENCES "Approvals"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "approvals_strategies_strategy" ADD CONSTRAINT "FK_f35960a463d100a1429816e269f" FOREIGN KEY ("strategyId") REFERENCES "strategy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "strategy_approvals_approvals" ADD CONSTRAINT "FK_5a002a8c13224dfccbf52af9064" FOREIGN KEY ("strategyId") REFERENCES "strategy"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "strategy_approvals_approvals" ADD CONSTRAINT "FK_49128b3028ff1cb85a8f795cece" FOREIGN KEY ("approvalsId") REFERENCES "Approvals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "journalApproval" ADD CONSTRAINT "FK_94506f44abb6ff58ed7a372afab" FOREIGN KEY ("journal_id") REFERENCES "jornal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "journalApproval" ADD CONSTRAINT "FK_8b5b6b07f89c873c506fda773f9" FOREIGN KEY ("approval_id") REFERENCES "Approvals"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" ADD CONSTRAINT "FK_caff2b72f125255ef0c0d292e4e" FOREIGN KEY ("journalId") REFERENCES "jornal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" ADD CONSTRAINT "FK_cba948387c51d30d5c76187b98d" FOREIGN KEY ("reasonId") REFERENCES "reasons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFeelings" ADD CONSTRAINT "FK_346a89307b20aced78a4d4b08ab" FOREIGN KEY ("journalId") REFERENCES "jornal"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "JournalFeelings" ADD CONSTRAINT "FK_85e48227ce4200f32fdbd4432f1" FOREIGN KEY ("feelingId") REFERENCES "feelings"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "JournalFeelings" DROP CONSTRAINT "FK_85e48227ce4200f32fdbd4432f1"`);
        await queryRunner.query(`ALTER TABLE "JournalFeelings" DROP CONSTRAINT "FK_346a89307b20aced78a4d4b08ab"`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" DROP CONSTRAINT "FK_cba948387c51d30d5c76187b98d"`);
        await queryRunner.query(`ALTER TABLE "JournalFailureReasons" DROP CONSTRAINT "FK_caff2b72f125255ef0c0d292e4e"`);
        await queryRunner.query(`ALTER TABLE "journalApproval" DROP CONSTRAINT "FK_8b5b6b07f89c873c506fda773f9"`);
        await queryRunner.query(`ALTER TABLE "journalApproval" DROP CONSTRAINT "FK_94506f44abb6ff58ed7a372afab"`);
        await queryRunner.query(`ALTER TABLE "strategy_approvals_approvals" DROP CONSTRAINT "FK_49128b3028ff1cb85a8f795cece"`);
        await queryRunner.query(`ALTER TABLE "strategy_approvals_approvals" DROP CONSTRAINT "FK_5a002a8c13224dfccbf52af9064"`);
        await queryRunner.query(`ALTER TABLE "approvals_strategies_strategy" DROP CONSTRAINT "FK_f35960a463d100a1429816e269f"`);
        await queryRunner.query(`ALTER TABLE "approvals_strategies_strategy" DROP CONSTRAINT "FK_f813f847a4a3e4c49e95f06fb5c"`);
        await queryRunner.query(`ALTER TABLE "jornal" DROP CONSTRAINT "FK_9120cf34c810e6296e8f6a5eac7"`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_9cab336eeec3022acf2de93e996"`);
        await queryRunner.query(`DROP INDEX "IDX_85e48227ce4200f32fdbd4432f" ON "JournalFeelings"`);
        await queryRunner.query(`DROP INDEX "IDX_346a89307b20aced78a4d4b08a" ON "JournalFeelings"`);
        await queryRunner.query(`DROP TABLE "JournalFeelings"`);
        await queryRunner.query(`DROP INDEX "IDX_cba948387c51d30d5c76187b98" ON "JournalFailureReasons"`);
        await queryRunner.query(`DROP INDEX "IDX_caff2b72f125255ef0c0d292e4" ON "JournalFailureReasons"`);
        await queryRunner.query(`DROP TABLE "JournalFailureReasons"`);
        await queryRunner.query(`DROP INDEX "IDX_8b5b6b07f89c873c506fda773f" ON "journalApproval"`);
        await queryRunner.query(`DROP INDEX "IDX_94506f44abb6ff58ed7a372afa" ON "journalApproval"`);
        await queryRunner.query(`DROP TABLE "journalApproval"`);
        await queryRunner.query(`DROP INDEX "IDX_49128b3028ff1cb85a8f795cec" ON "strategy_approvals_approvals"`);
        await queryRunner.query(`DROP INDEX "IDX_5a002a8c13224dfccbf52af906" ON "strategy_approvals_approvals"`);
        await queryRunner.query(`DROP TABLE "strategy_approvals_approvals"`);
        await queryRunner.query(`DROP INDEX "IDX_f35960a463d100a1429816e269" ON "approvals_strategies_strategy"`);
        await queryRunner.query(`DROP INDEX "IDX_f813f847a4a3e4c49e95f06fb5" ON "approvals_strategies_strategy"`);
        await queryRunner.query(`DROP TABLE "approvals_strategies_strategy"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "jornal"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "reasons"`);
        await queryRunner.query(`DROP TABLE "feelings"`);
        await queryRunner.query(`DROP TABLE "strategy"`);
        await queryRunner.query(`DROP TABLE "Approvals"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
