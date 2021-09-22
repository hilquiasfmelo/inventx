import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IHashProvider } from '@modules/accounts/providers/HashProvider/interfaces/IHashProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdateUserUseCase {
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
    isAdmin,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdatedEmail = await this.usersRepository.findByEmail(email);

    // Verifica se o e-mail que está sendo alterado, está logado no momento
    if (userWithUpdatedEmail && userWithUpdatedEmail.id === id) {
      throw new AppError('E-mail already in use.');
    }

    user.password = await this.hashProvider.generateHash(password);

    Object.assign(user, {
      name,
      username,
      email,
      password: user.password,
      isAdmin,
    });

    const updateUser = await this.usersRepository.save(user);

    return updateUser;
  }
}

export { UpdateUserUseCase };
