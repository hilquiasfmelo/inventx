import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListComputerBySectorUseCase } from './ListComputerBySectorUseCase';

class ListComputerBySectorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { sector_id } = request.params;

    const listComputersUseCase = container.resolve(ListComputerBySectorUseCase);

    const listComputers = await listComputersUseCase.execute(sector_id);

    return response.status(200).json(listComputers);
  }
}

export { ListComputerBySectorController };
