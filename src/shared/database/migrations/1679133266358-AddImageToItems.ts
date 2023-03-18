import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddImageToItems1679133266358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('items', new TableColumn({
            name: 'image',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items', 'image')
    }

}
