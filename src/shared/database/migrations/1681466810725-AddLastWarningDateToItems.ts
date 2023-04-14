import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddLastWarningDateToItems1681466810725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('items', new TableColumn({
            name: 'last_warning_date',
            type: 'timestamp',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items', 'last_warning_date')
    }

}
