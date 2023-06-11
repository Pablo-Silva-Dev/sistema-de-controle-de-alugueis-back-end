import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterOrderPayments1686485837827 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'payment_id',
            type: 'varchar',
            isNullable: true,
        }))
        await queryRunner.dropColumn('orders', 'payment_link')
        await queryRunner.dropColumn('orders', 'payment_status')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.dropColumn('orders', 'payment_id')
    }
}
