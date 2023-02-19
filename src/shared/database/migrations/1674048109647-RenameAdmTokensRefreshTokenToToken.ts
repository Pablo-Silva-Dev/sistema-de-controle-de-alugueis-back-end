import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class RenameAdmTokensRefreshTokenToToken1674048109647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('admtokens', new TableColumn({
            name: 'token',
            type: 'varchar'
        }))

        await queryRunner.dropColumn('admtokens', 'refresh_token')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropColumn('admtokens', 'token')
        await queryRunner.addColumn('admtokens', new TableColumn({
            name: 'refresh_token',
            type: 'varchar'
        }))
    }

}
