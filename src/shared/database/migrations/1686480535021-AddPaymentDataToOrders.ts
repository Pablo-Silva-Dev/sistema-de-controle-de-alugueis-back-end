import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPaymentDataToOrders1686480535021 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'payment_status',
            type: 'varchar',
            isNullable: true,
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'payment_link',
            type: 'varchar',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'payment_link')
        await queryRunner.dropColumn('orders', 'payment_status')
    }

}
