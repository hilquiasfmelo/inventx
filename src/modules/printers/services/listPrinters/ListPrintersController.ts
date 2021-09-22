import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPrintersUseCase } from './ListPrintersUseCase';

class ListPrintersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPrintersUseCase = container.resolve(ListPrintersUseCase);

    const listPrinters = await listPrintersUseCase.execute();

    return response.status(200).json(listPrinters);
  }
}

export { ListPrintersController };
