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
                    },
                    {
                        name: 'surname',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                    },
                    {
                        name: 'IE',
                        type: 'varchar',
                    },
                    {
                        name: 'active',
                        type: 'boolean',
                    },
                    {
                        name: 'note',
                        type: 'varchar',
                    },
                    {
                        name: 'adress',
                        type: 'varchar',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'bairro',
                        type: 'varchar',
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
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
                        type: 'Timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'Timestamp',
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
