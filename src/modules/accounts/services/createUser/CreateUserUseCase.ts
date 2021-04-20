import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({id, name, username, email, password, isAdmin}: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      id,
      name,
      username,
      email,
      password,
      isAdmin
    });

    return user;
  }
}

export { CreateUserUseCase }