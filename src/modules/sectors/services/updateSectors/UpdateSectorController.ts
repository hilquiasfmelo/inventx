import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateSectorUseCase } from './UpdateSectorUseCase';

class UpdateSectorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateSectorUseCase = container.resolve(UpdateSectorUseCase);

    const sector = await updateSectorUseCase.execute({ id, name });

    return response.status(201).json(sector);
  }
}

export { UpdateSectorController };
