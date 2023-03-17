import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddLongDescriptionToItems1679052143505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('items', new TableColumn({
            name: 'description_long',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items', 'description_long')
    }

}
