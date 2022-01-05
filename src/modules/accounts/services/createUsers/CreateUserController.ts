import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async hanlde(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      username,
      email,
      password,
    });

    return response.status(201).json(instanceToInstance(user));
  }
}

export { CreateUserController };
