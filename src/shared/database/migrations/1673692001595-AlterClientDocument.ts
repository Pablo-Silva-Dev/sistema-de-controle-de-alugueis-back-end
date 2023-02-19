import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterClientDocument1673692001595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'cpf',
            type: 'varchar',
            isNullable: true,
        }))
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'cnpj',
            type: 'varchar',
            isNullable: true,
        }))
        await queryRunner.dropColumn('clients', 'document')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('clients', 'cpf')
        await queryRunner.dropColumn('clients', 'cnpj')
        await queryRunner.addColumn('clients', new TableColumn({
            name: 'document',
            type: 'varchar',
        }))
    }

}
