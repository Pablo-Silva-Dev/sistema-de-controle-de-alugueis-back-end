import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterOrderToStatusAndDayExpirationCount1677663157146 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'finished',
            type: 'boolean',
            default: false
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'days_to_expire_rent',
            type: 'integer'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'days_to_expire_rent')
        await queryRunner.dropColumn('orders', 'finished')
    }

}
