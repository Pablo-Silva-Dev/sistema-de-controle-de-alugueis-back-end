import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNotificationsTable1681037362111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notifications',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    type: 'varchar'
                },
                {
                    name: 'category',
                    type: 'varchar'
                },
                {
                    name: 'read',
                    type: 'boolean'
                },
                {
                    name: 'created_at',
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notifications')
    }

}
