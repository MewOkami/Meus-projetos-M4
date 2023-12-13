import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694631185105 implements MigrationInterface {
    name = 'InitialMigration1694631185105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2" FOREIGN KEY ("realEstateId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
