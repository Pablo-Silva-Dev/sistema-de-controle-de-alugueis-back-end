import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTotalDaysToOrders1677785286407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'total_days',
            type: 'integer',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'total_days')
    }

}
