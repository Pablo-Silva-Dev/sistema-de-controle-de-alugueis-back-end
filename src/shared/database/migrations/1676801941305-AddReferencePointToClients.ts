import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddReferencePointToClients1676801941305 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'reference_point',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('clients', 'reference_point')
    }

}
