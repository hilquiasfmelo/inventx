import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListComputersUseCase } from './ListComputersUseCase';

class ListComputersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listComputersUseCase = container.resolve(ListComputersUseCase);

    const listComputers = await listComputersUseCase.execute();

    return response.status(200).json(listComputers);
  }
}

export { ListComputersController };
