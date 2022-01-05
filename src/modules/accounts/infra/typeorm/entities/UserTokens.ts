import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('user_tokens')
class UserTokens {
  @PrimaryColumn()
  id?: string;

  @Column()
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id || !this.token) {
      this.id = uuidV4();
      this.token = uuidV4();
    }
  }
}

export { UserTokens };
