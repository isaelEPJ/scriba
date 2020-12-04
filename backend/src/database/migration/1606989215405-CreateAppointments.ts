import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class CreateAppointments1606989215405 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'user_open_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'user_close_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'priority',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        isNullable: false,
                    },

                    {
                        name: 'content',
                        type: 'varchar',
                        isNullable: false,
                    },

                    {
                        name: 'conclusion',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'note',
                        type: 'varchar',
                    },
                    {
                        name: 'email_content',
                        type: 'varchar',
                    },
                    {
                        name: 'conclude',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'finished',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'canceled',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'period',
                        type: 'Timestamp',
                        isNullable: true,
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
        await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
                name: 'UserOpenAttendance',
                columnNames: ['user_open_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
                name: 'UserCloseAttendance',
                columnNames: ['user_close_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
                name: 'AttendanceClient',
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appointments', 'UserOpenAttendance');
        await queryRunner.dropForeignKey('appointments', 'UserCloseAttendance');
        await queryRunner.dropForeignKey('appointments', 'AttendanceClient');
        await queryRunner.dropTable('appointments');
    }
}
