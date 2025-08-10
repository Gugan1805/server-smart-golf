import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoleTable1754834473418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE roles (
        role VARCHAR(10) PRIMARY KEY,
        rgba VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE roles`);
    }

}
