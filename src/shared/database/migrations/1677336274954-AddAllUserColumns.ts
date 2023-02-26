import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddAllUserColumns1677336274954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_phone',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_email',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_cep',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_city',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_complement',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_neighborhood',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_residence_number',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_street',
            type: 'varchar'
        }))
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'client_address_reference_point',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'client_address_reference_point')
        await queryRunner.dropColumn('orders', 'client_address_street')
        await queryRunner.dropColumn('orders', 'client_address_residence_number')
        await queryRunner.dropColumn('orders', 'client_address_neighborhood')
        await queryRunner.dropColumn('orders', 'client_address_complement')
        await queryRunner.dropColumn('orders', 'client_address_city')
        await queryRunner.dropColumn('orders', 'client_address_cep')
        await queryRunner.dropColumn('orders', 'client_email')
        await queryRunner.dropColumn('orders', 'client_phone')
    }
}
