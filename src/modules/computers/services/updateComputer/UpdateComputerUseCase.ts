import { inject, injectable } from 'tsyringe';
import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';
import { Computer } from '@modules/computers/infra/typeorm/entities/Computer';
import { AppError } from '@shared/errors/AppError';
import { IComputerDTO } from '@modules/computers/dtos/IComputerDTO';
import { ISectorsRepository } from '@modules/sectors/infra/interfaces/ISectorsRepository';

@injectable()
class UpdateComputerUseCase {
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
    const computer = await this.computersRepository.findById(id);

    if (!computer) {
      throw new AppError('Computer not found');
    }

    const computerUpdateRecord = await this.computersRepository.findByRecord(
      number_tumble,
    );

    // Verifica se o número do registro já existe cadastrado
    if (
      computerUpdateRecord &&
      computerUpdateRecord.number_tumble === number_tumble
    ) {
      throw new AppError('Record already in use.');
    }

    // Verifica se o setor que dejesa mudar existe
    const sectorAlreadyExists = await this.sectorsRepository.findById(
      sector_id,
    );

    if (!sectorAlreadyExists) {
      throw new AppError('Sector does not exists.');
    }

    // Verifica se o computador já pertence ao setor
    if (computer.sector_id === sector_id) {
      throw new AppError('Computer already belongs to the sector');
    }

    Object.assign(computer, {
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    });

    const computerUpdate = await this.computersRepository.save(computer);

    return computerUpdate;
  }
}

export { UpdateComputerUseCase };
