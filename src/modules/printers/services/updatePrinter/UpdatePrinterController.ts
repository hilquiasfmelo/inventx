import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdatePrinterUseCase } from './UpdatePrinterUseCase';

class UpdatePrinterController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, number_tumble, model_tonner, sector_id } = request.body;

    const updatePrinterUseCase = container.resolve(UpdatePrinterUseCase);

    const printerUpdate = await updatePrinterUseCase.execute({
      id,
      name,
      number_tumble,
      model_tonner,
      sector_id,
    });

    return response.json(printerUpdate);
  }
}

export { UpdatePrinterController };
