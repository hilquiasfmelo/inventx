import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSectorsUseCase } from './ListSectorsUseCase';

class ListSectorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSectorsUseCase = container.resolve(ListSectorsUseCase);

    const sectors = await listSectorsUseCase.execute();

    return response.status(200).json(sectors);
  }
}

export { ListSectorsController };
