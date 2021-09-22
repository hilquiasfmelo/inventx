import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.index();

    return users;
  }
}

export { ListUsersUseCase };
