import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1673606984906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "items",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'int'
                },
                {
                    name: 'quantity',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: true
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: true
                },
            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }

}
