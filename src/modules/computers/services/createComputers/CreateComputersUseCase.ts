import { inject, injectable } from 'tsyringe';

import { IComputerDTO } from '@modules/computers/dtos/IComputerDTO';
import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';
import { Computer } from '@modules/computers/infra/typeorm/entities/Computer';
import { AppError } from '@shared/errors/AppError';
import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';

@injectable()
class CreateComputersUseCase {
  constructor(
    @inject('ComputersRepository')
    private computersRepository: IComputersRepository,

    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute({
    id,
    brand,
    description,
    number_tumble,
    number_remote,
    sector_id,
  }: IComputerDTO): Promise<Computer> {
    const computerAlreadyExists = await this.computersRepository.findByRecord(
      number_tumble,
    );

    if (computerAlreadyExists) {
      throw new AppError('Computer already exists.');
    }

    const sectorAlreadyExists = await this.sectorsRepository.findById(
      sector_id,
    );

    if (!sectorAlreadyExists) {
      throw new AppError('Sector does not exist.');
    }

    const computer = await this.computersRepository.create({
      id,
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    });

    return computer;
  }
}

export { CreateComputersUseCase };
