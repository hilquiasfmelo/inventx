import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { IHashProvider } from '@modules/accounts/providers/HashProvider/interfaces/IHashProvider';
import { AppError } from '@shared/errors/AppError';

import { sign } from 'jsonwebtoken';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    isAdmin: boolean;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(username);
    if (!user) {
      throw new AppError('Username or password incorrect', 401);
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Username or password incorrect', 401);
    }

    const token = sign({}, '4ca3c809d8aba8eda280c11654004c84', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
