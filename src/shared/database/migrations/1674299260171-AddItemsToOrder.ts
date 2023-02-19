import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddItemsToOrder1674299260171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'items',
            type: 'jsonb',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'items')
    }

}
