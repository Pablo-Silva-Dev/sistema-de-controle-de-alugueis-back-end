import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterItemPrice1673639044743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items', 'price')
        await queryRunner.addColumn('items', new TableColumn({
            name: 'price',
            type: 'float',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items', 'price')
        await queryRunner.addColumn('items', new TableColumn({
            name: 'price',
            type: 'integer',
            isNullable: true
        }))
    }

}
