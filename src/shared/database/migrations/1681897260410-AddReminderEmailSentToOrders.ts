import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddReminderEmailSentToOrders1681897260410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'reminder_order_email_sent',
            type: 'boolean',
            default: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'reminder_order_email_sent')
    }

}
