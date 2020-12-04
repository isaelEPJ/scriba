import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1606435508847 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'admin',
                        type: 'boolean',
                    },
                    {
                        name: 'active',
                        type: 'boolean',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'notification',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'altered_at',
                        type: 'Timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
