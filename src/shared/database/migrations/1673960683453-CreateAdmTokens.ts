import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdmTokens1673960683453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'admtokens',
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "refresh_token",
                    type: "varchar",
                },
                {
                    name: "adm_id",
                    type: "uuid",
                },
                {
                    name: "expires_date",
                    type: "timestamp",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
              {
                name: 'FKAdmTokens',
                referencedTableName: 'administrators',
                referencedColumnNames: ['id'],
                columnNames: ['adm_id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
              }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admtokens')
    }

}
