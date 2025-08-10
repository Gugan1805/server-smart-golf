import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoleSeeder1754834688489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      INSERT INTO roles (role, rgba, created_at, updated_at)
      VALUES
        ('Player' ,'rgb(153, 0, 255)', NOW(), NOW()),
        ('Admin' , 'rgb(0, 170, 255)', NOW(), NOW())
      ON CONFLICT (role) DO NOTHING;
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      DELETE FROM roles
      WHERE role IN ('Player', 'Admin');
    `);
    }

}
