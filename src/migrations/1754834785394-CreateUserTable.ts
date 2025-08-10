import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1754834785394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(10) UNIQUE NOT NULL,
        role VARCHAR(10) UNIQUE NOT NULL DEFAULT 'Player',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES roles(role) ON DELETE RESTRICT ON UPDATE CASCADE
      );
    `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }

}
