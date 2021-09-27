import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';

interface IUsersRepository {
  create({
    id,
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User>;

  index(): Promise<User[]>;

  findById(id: string): Promise<User>;

  findByEmail(email: string): Promise<User>;

  findByUsername(username: string): Promise<User>;

  save(user: User): Promise<User>;

  deleteById(id: string): Promise<void>;
}

export { IUsersRepository };
