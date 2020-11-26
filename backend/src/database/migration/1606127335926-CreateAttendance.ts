import { Column, MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAttendance1606127335926 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Appointment',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'user_open_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'user_close_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'priority',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'annotation',
                        type: 'varchar',
                    },
                    {
                        name: 'content',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'solution',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email_content',
                        type: 'varchar',
                        isNullable: false,
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

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
