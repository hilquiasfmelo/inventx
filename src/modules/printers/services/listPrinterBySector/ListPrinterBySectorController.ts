import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPrinterBySectorUseCase } from './ListPrinterBySectorUseCase';

class ListPrinterBySectorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { sector_id } = request.params;

    const listPrinterBySector = container.resolve(ListPrinterBySectorUseCase);

    const printers = await listPrinterBySector.execute(sector_id);

    return response.status(200).json(printers);
  }
}

export { ListPrinterBySectorController };
