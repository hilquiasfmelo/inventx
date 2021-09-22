import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePrinters1632177945067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'printers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'number_tumble',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'model_tonner',
            type: 'varchar',
          },
          {
            name: 'sector_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'printers',
      new TableForeignKey({
        name: 'FKSectorPrinter',
        referencedTableName: 'sectors',
        referencedColumnNames: ['id'],
        columnNames: ['sector_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('printers', 'FKSectorPrinter');

    await queryRunner.dropTable('printers');
  }
}
