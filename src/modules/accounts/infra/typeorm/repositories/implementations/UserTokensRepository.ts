import { IUserTokensRepository } from '@modules/accounts/infra/interfaces/IUserTokensRepository';
import { getRepository, Repository } from 'typeorm';
import { UserTokens } from '../../entities/UserTokens';

class UserTokensRepository implements IUserTokensRepository {
  private userTokensRepository: Repository<UserTokens>;

  constructor() {
    this.userTokensRepository = getRepository(UserTokens);
  }

  async generate(user_id: string): Promise<UserTokens> {
    const userToken = this.userTokensRepository.create({
      user_id,
    });

    await this.userTokensRepository.save(userToken);

    return userToken;
  }

  async findByToken(token: string): Promise<UserTokens> {
    const userToken = this.userTokensRepository.findOne({ token });

    return userToken;
  }
}

export { UserTokensRepository };
