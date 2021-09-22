import { getRepository, Repository } from 'typeorm';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  async create({
    id,
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.usersRepository.create({
      id,
      name,
      username,
      email,
      password,
    });

    await this.usersRepository.save(user);

    return user;
  }

  async index(): Promise<User[]> {
    const users = await this.usersRepository.find();

    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }

  async save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async deleteById(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

export { UsersRepository };
