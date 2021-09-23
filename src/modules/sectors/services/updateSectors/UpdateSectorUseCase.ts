import { inject, injectable } from 'tsyringe';

import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';
import { Sector } from '@modules/sectors/infra/typeorm/entities/Sector';
import { ICreateSectorDTO } from '@modules/sectors/dtos/ICreateSectorDTO';
import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateSectorUseCase {
  constructor(
    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute({ id, name }: ICreateSectorDTO): Promise<Sector> {
    const sector = await this.sectorsRepository.findById(id);

    if (!sector) {
      throw new AppError('Sector not found');
    }

    const sectorNameExists = await this.sectorsRepository.findByName(name);

    if (sectorNameExists) {
      throw new AppError('There is already a sector with that name');
    }

    // Object.assign(sector, {
    //   name,
    // });

    sector.name = name;

    const sectorUpdate = await this.sectorsRepository.save(sector);

    return sectorUpdate;
  }
}

export { UpdateSectorUseCase };
