import { User } from "../../entities/User";
import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository{
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User)
  }

  async create({id, name, username, email, password, isAdmin}: ICreateUserDTO): Promise<User> {
    const user = this.usersRepository.create({
      id,
      name,
      username,
      email,
      password,
      isAdmin,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersRepository }