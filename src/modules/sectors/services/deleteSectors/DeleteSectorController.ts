import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteSectorUseCase } from './DeleteSectorUseCase';

class DeleteSectorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSectorUseCase = container.resolve(DeleteSectorUseCase);

    await deleteSectorUseCase.execute(id);

    return response.status(200).json({
      message: 'Sector deleted success.',
    });
  }
}

export { DeleteSectorController };
