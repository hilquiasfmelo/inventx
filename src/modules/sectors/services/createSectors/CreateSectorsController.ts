import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSectorsUseCase } from './CreateSectorsUseCase';

class CreateSectorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSectorsUseCase = container.resolve(CreateSectorsUseCase);

    const sector = await createSectorsUseCase.execute({
      name,
    });

    return response.status(201).json(sector);
  }
}

export { CreateSectorsController };
