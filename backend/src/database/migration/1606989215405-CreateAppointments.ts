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
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'user_open_id',
                        type: 'varchar',
                    },
                    {
                        name: 'user_close_id',
                        type: 'varchar',
                    },
                    {
                        name: 'priority',
                        type: 'varchar',
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'content',
                        type: 'varchar',
                    },
                    {
                        name: 'conclusion',
                        type: 'varchar',
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
                    },
                    {
                        name: 'finished',
                        type: 'boolean',
                    },
                    {
                        name: 'canceled',
                        type: 'boolean',
                    },
                    {
                        name: 'prazo',
                        type: 'Timestamp',
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
        // await queryRunner.createForeignKey(
        //     'appointments',
        //     new TableForeignKey({
        //         name: 'UserOpenAttendance',
        //         columnNames: ['user_open_id'],
        //         referencedColumnNames: ['id'],
        //         referencedTableName: 'users',
        //         onDelete: 'SET NULL',
        //         onUpdate: 'CASCADE',
        //     }),
        // );

        // await queryRunner.createForeignKey(
        //     'appointments',
        //     new TableForeignKey({
        //         name: 'UserCloseAttendance',
        //         columnNames: ['user_close_id'],
        //         referencedColumnNames: ['id'],
        //         referencedTableName: 'users',
        //         onDelete: 'SET NULL',
        //         onUpdate: 'CASCADE',
        //     }),
        // );
        //     await queryRunner.createForeignKey(
        //         'appointments',
        //         new TableForeignKey({
        //             name: 'AttendanceClient',
        //             columnNames: ['client_id'],
        //             referencedColumnNames: ['id'],
        //             referencedTableName: 'client',
        //             onDelete: 'SET NULL',
        //             onUpdate: 'CASCADE',
        //         }),
        //     );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }
}
