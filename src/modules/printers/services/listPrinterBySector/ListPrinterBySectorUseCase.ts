import { IPrintersRepository } from '@modules/printers/infra/interfaces/IPrintersRepository';
import { Printer } from '@modules/printers/infra/typeorm/entities/Printer';
import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPrinterBySectorUseCase {
  constructor(
    @inject('PrintersRepository')
    private printersRepository: IPrintersRepository,

    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute(sector_id: string): Promise<Printer[]> {
    const sectorAlreadyExists = await this.sectorsRepository.findById(
      sector_id,
    );

    if (!sectorAlreadyExists) {
      throw new AppError('Sector does not exist.');
    }

    const printers = await this.printersRepository.findPrinterBySector(
      sector_id,
    );

    return printers;
  }
}

export { ListPrinterBySectorUseCase };
