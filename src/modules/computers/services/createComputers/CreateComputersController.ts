import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateComputersUseCase } from './CreateComputersUseCase';

class CreateComputerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    } = request.body;

    const createComputerUseCase = container.resolve(CreateComputersUseCase);

    const computer = await createComputerUseCase.execute({
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    });

    return response.status(201).json(computer);
  }
}

export { CreateComputerController };
