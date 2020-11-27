import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientTable1606435449984 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'client',
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
                        name: 'surname',
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
                        name: 'cnpj',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'IE',
                        type: 'varchar',
                    },
                    {
                        name: 'active',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'note',
                        type: 'varchar',
                    },
                    {
                        name: 'adress',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'bairro',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'contact',
                        type: 'varchar',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('client');
    }
}
