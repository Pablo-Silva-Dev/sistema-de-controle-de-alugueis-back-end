import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPrintNumberToNotifications1682069344519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('notifications', new TableColumn({
            name: 'print_number',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('notifications', 'print_number');
    }

}
