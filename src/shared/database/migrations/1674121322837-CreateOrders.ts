import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1674121322837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'voucher_code',
                    type: 'varchar',
                },
                {
                    name: 'client_name',
                    type: 'varchar',
                },
                {
                    name: 'client_cpf',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'client_cnpj',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'rent_date_start',
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: 'rent_date_return',
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: 'total',
                    type: "float",
                },
                {
                    name: 'client_id',
                    type: 'uuid'
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
            ],
            foreignKeys:[
                {
                    name: 'FKClient',
                    referencedTableName: 'clients',
                    referencedColumnNames: ['id'],
                    columnNames: ['client_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
    }

}
