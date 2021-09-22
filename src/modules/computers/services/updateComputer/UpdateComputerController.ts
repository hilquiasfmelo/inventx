import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateComputerUseCase } from './UpdateComputerUseCase';

class UpdateComputerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    } = request.body;

    const updateComputerUseCase = container.resolve(UpdateComputerUseCase);

    const computerUpdate = await updateComputerUseCase.execute({
      id,
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    });

    return response.json(computerUpdate);
  }
}

export { UpdateComputerController };
