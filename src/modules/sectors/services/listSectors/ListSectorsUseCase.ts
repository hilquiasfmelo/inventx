import { Sector } from '@modules/sectors/infra/typeorm/entities/Sector';
import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSectorsUseCase {
  constructor(
    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute(): Promise<Sector[]> {
    const sectors = await this.sectorsRepository.index();

    return sectors;
  }
}

export { ListSectorsUseCase };
