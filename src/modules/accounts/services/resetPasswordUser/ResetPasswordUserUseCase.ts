import { inject, injectable } from 'tsyringe';
import { addHours, isAfter } from 'date-fns';

import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { IUserTokensRepository } from '@modules/accounts/infra/interfaces/IUserTokensRepository';
import { IHashProvider } from '@modules/accounts/providers/HashProvider/interfaces/IHashProvider';

interface IRequestReset {
  token: string;
  new_password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ token, new_password }: IRequestReset): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token not found');
    }

    const user = this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    // Verifica se o reset da senha já passou de 1h
    const tokenCreatedAt = userToken.created_at;

    const compareDate = addHours(tokenCreatedAt, 1);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired');
    }

    (await user).password = await this.hashProvider.generateHash(new_password);

    await this.usersRepository.save(await user);
  }
}

export { ResetPasswordUserUseCase };
