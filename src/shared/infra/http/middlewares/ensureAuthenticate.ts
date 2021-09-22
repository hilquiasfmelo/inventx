import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '4ca3c809d8aba8eda280c11654004c84',
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      user_id,
    };

    next();
  } catch (error) {
    throw new AppError('Token is missing', 401);
  }
}

export { ensureAuthenticate };