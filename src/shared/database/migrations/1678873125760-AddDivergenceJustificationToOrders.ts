import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddDivergenceJustificationToOrders1678873125760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'divergence_justification',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orders', 'divergence_justification')
    }

}
