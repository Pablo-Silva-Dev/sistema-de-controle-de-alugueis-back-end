import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1673432087127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'clients',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'document',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'phone',
                    type: 'varchar'
                },
                {
                    name: 'neighborhood',
                    type: 'varchar'
                },
                {
                    name: 'street',
                    type: 'varchar'
                },
                {
                    name: 'residence_number',
                    type: 'varchar'
                },
                {
                    name: 'complement',
                    type: 'varchar'
                },
                {
                    name: 'city',
                    type: 'varchar'
                },
                {
                    name: 'cep',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'date',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'date',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients')
    }

}
