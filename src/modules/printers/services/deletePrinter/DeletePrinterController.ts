import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeletePrinterUseCase } from './DeletePrinterUseCase';

class DeletePrinterController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePrinterUseCase = container.resolve(DeletePrinterUseCase);

    await deletePrinterUseCase.execute(id);

    return response.status(200).json({
      message: 'Printer deleted success.',
    });
  }
}

export { DeletePrinterController };
