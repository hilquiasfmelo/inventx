import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    id,
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

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
