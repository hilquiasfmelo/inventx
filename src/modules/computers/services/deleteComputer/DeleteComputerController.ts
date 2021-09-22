import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteComputerUseCase } from './DeleteComputerUseCase';

class DeleteComputerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteComputerUseCase = container.resolve(DeleteComputerUseCase);

    await deleteComputerUseCase.execute(id);

    return response.status(200).json({
      message: 'Computer deleted success.',
    });
  }
}

export { DeleteComputerController };
