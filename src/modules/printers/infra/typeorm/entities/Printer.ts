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

@Entity('printers')
class Printer {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  number_tumble: string;

  @Column()
  model_tonner: string;

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

export { Printer };
