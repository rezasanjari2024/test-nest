import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1736077244117 implements MigrationInterface {
    name = 'CreateUserTable1736077244117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "starategy" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_b411bd53b5e4ae79e75905f7953" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_042676e5bbace1bff5350d9dd97" DEFAULT getdate(), "Name" nvarchar(255) NOT NULL, "Description" nvarchar(255) NOT NULL, "DoTime" nvarchar(255) NOT NULL, "Symbol" ntext NOT NULL, CONSTRAINT "PK_e082d5e48ac7287b7e12dc0ef63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jornal" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_c1f161012edcbf0d66ca39381df" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_d776f2826732fe11cab0cbd295e" DEFAULT getdate(), "symboleId" nvarchar(255) NOT NULL, "ReasonsForEntry" nvarchar(255) NOT NULL, "ResultAfterTp" nvarchar(255) NOT NULL, "ResultAfterRf" nvarchar(255) NOT NULL, "PercentageResult" float NOT NULL, "DollerResult" float NOT NULL, "Fee" float NOT NULL, "strategyIdId" int, "userIdId" int, CONSTRAINT "PK_b3ef768dca448f878031b3da8cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" int NOT NULL IDENTITY(1,1), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_f50e152d11f027ee500dbad6c9c" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_13af9de5b924749d47952cd1d59" DEFAULT getdate(), "Balance" decimal(15,2) NOT NULL, "Broker" nvarchar(255) NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD CONSTRAINT "FK_334365420f3fd391eb14c343735" FOREIGN KEY ("strategyIdId") REFERENCES "starategy"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jornal" ADD CONSTRAINT "FK_a66ebcd3234a9d9f977d87bbc9d" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jornal" DROP CONSTRAINT "FK_a66ebcd3234a9d9f977d87bbc9d"`);
        await queryRunner.query(`ALTER TABLE "jornal" DROP CONSTRAINT "FK_334365420f3fd391eb14c343735"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "jornal"`);
        await queryRunner.query(`DROP TABLE "starategy"`);
    }

}
