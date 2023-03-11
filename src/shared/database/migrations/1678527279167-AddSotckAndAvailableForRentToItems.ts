import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddSotckAndAvailableForRentToItems1678527279167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('items', new TableColumn({
            name: 'stock',
            type: 'integer'
        }))
        await queryRunner.addColumn('items', new TableColumn({
            name: 'available_for_rent',
            type: 'boolean',
            default: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items', 'available_for_rent')
        await queryRunner.dropColumn('items', 'stock')
    }

}
