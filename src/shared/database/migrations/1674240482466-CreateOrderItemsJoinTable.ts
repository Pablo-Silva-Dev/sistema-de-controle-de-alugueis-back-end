import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateOrderItemsJoinTable1674240482466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'order_items',
            columns: [
                {
                    name: 'order_id',
                    type: 'uuid'
                },
                {
                    name: 'item_id',
                    type: 'uuid',
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                }
            ]
        }))

        await queryRunner.createForeignKey(
            'order_items',
            new TableForeignKey({
                name: 'FKOrderItem',
                referencedTableName: 'orders',
                referencedColumnNames: ['id'],
                columnNames: ['item_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )

        await queryRunner.createForeignKey(
            'order_items',
            new TableForeignKey({
                name: 'FKItemOrder',
                referencedTableName: 'items',
                referencedColumnNames: ['id'],
                columnNames: ['order_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_items', 'FKItemOrder')
        await queryRunner.dropForeignKey('order_items', 'FKOrderItem')
        await queryRunner.dropTable('order_items')
    }

}
