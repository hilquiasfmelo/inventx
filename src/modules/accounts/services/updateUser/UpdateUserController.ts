import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, username, email, password, isAdmin } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const updateUser = await updateUserUseCase.execute({
      id,
      name,
      username,
      email,
      password,
      isAdmin,
    });

    return response.json(updateUser);
  }
}

export { UpdateUserController };
