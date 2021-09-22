import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateComputers1632177793179 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'computers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'number_tumble',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'number_remote',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
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
      'computers',
      new TableForeignKey({
        name: 'FKSectorComputer',
        referencedTableName: 'sectors',
        referencedColumnNames: ['id'],
        columnNames: ['sector_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('computers', 'FKSectorComputer');

    await queryRunner.dropTable('computers');
  }
}
