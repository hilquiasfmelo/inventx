import { inject, injectable } from 'tsyringe';

import { IPrinterDTO } from '@modules/printers/dtos/IPrinterDTO';
import { IPrintersRepository } from '@modules/printers/infra/interfaces/IPrintersRepository';
import { Printer } from '@modules/printers/infra/typeorm/entities/Printer';
import { AppError } from '@shared/errors/AppError';
import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';

@injectable()
class CreatePrintersUseCase {
  constructor(
    @inject('PrintersRepository')
    private printersRepository: IPrintersRepository,

    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute({
    id,
    name,
    number_tumble,
    model_tonner,
    sector_id,
  }: IPrinterDTO): Promise<Printer> {
    const printerAlreadyExists = await this.printersRepository.findByRecord(
      number_tumble,
    );

    if (printerAlreadyExists) {
      throw new AppError('Printer already exists');
    }

    const sectorAlreadyExists = await this.sectorsRepository.findById(
      sector_id,
    );

    if (!sectorAlreadyExists) {
      throw new AppError('Sector does not exist.');
    }

    const printer = await this.printersRepository.create({
      id,
      name,
      number_tumble,
      model_tonner,
      sector_id,
    });

    return printer;
  }
}

export { CreatePrintersUseCase };
