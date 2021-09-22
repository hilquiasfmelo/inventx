import { inject, injectable } from 'tsyringe';
import { Computer } from '@modules/computers/infra/typeorm/entities/Computer';
import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';
import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class ListComputerBySectorUseCase {
  constructor(
    @inject('ComputersRepository')
    private computersRepository: IComputersRepository,

    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute(sector_id: string): Promise<Computer[]> {
    const sectorAlreadyExists = await this.sectorsRepository.findById(
      sector_id,
    );

    if (!sectorAlreadyExists) {
      throw new AppError('Sector does not exist.');
    }

    const computers = await this.computersRepository.findComputerBySector(
      sector_id,
    );

    return computers;
  }
}

export { ListComputerBySectorUseCase };
