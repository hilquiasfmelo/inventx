import { ICreateSectorDTO } from '@modules/sectors/dtos/ICreateSectorDTO';
import { Sector } from '@modules/sectors/infra/typeorm/entities/Sector';
import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateSectorsUseCase {
  constructor(
    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute({ name }: ICreateSectorDTO): Promise<Sector> {
    const sectorsAlreadyExists = await this.sectorsRepository.findByName(name);

    if (sectorsAlreadyExists) {
      throw new AppError('Sector Already Exists');
    }

    const sector = await this.sectorsRepository.create({
      name,
    });

    return sector;
  }
}

export { CreateSectorsUseCase };
