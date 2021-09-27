import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Sector } from '../../../../sectors/infra/typeorm/entities/Sector';
// import { Sector } from '@modules/sectors/infra/typeorm/entities/Sector';

@Entity('computers')
class Computer {
  @PrimaryColumn()
  id: string;

  @Column()
  brand: string;

  @Column()
  description: string;

  @Column()
  number_tumble: string;

  @Column()
  number_remote: string;

  @ManyToOne(() => Sector)
  @JoinColumn({ name: 'sector_id' })
  sector: Sector;

  @Column()
  sector_id: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Computer };
