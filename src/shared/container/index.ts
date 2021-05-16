import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
