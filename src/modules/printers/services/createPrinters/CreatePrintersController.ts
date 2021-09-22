import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePrintersUseCase } from './CreatePrintersUseCase';

class CreatePrintersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, number_tumble, model_tonner, sector_id } = request.body;

    const createPrinterUseCase = container.resolve(CreatePrintersUseCase);

    const printer = await createPrinterUseCase.execute({
      name,
      number_tumble,
      model_tonner,
      sector_id,
    });

    return response.status(201).json(printer);
  }
}

export { CreatePrintersController };
