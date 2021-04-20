import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create({ id, name, username, email, password, isAdmin }: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository }