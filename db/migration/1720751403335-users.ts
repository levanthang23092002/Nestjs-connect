import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1720751403335 implements MigrationInterface {
    name = 'Users1720751403335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "type" character varying NOT NULL, "role" character varying NOT NULL, "address" character varying NOT NULL DEFAULT 'quảng nam', "password" character varying NOT NULL DEFAULT 'pass123', "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
