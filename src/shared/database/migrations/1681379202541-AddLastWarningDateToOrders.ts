import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddLastWarningDateToOrders1681379202541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'last_warning_date',
            type: 'timestamp',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'last_warning_date')
    }
}
