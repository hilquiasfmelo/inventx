import { inject, injectable } from 'tsyringe';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { AppError } from '@shared/errors/AppError';
import { IHashProvider } from '@modules/accounts/providers/HashProvider/interfaces/IHashProvider';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    id,
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findById(id);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      id,
      name,
      username,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
