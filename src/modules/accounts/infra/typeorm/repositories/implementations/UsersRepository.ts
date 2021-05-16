import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

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
}

export { UsersRepository };
