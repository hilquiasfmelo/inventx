import { IPrinterDTO } from '@modules/printers/dtos/IPrinterDTO';
import { IPrintersRepository } from '@modules/printers/infra/interfaces/IPrintersRepository';
import { Printer } from '@modules/printers/infra/typeorm/entities/Printer';
import { ISectorsRepository } from '@modules/sectors/infra/interfaces/ISectorsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdatePrinterUseCase {
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
    const printer = await this.printersRepository.findById(id);

    if (!printer) {
      throw new AppError('Printer not found');
    }

    const printerUpdateRecord = await this.printersRepository.findByRecord(
      number_tumble,
    );

    // Verifica se o número do registro já existe cadastrado
    if (
      printerUpdateRecord &&
      printerUpdateRecord.number_tumble === number_tumble
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

    // Verifica se a impressora já pertence ao setor
    if (printer.sector_id === sector_id) {
      throw new AppError('Printer already belongs to the sector');
    }

    Object.assign(printer, {
      name,
      number_tumble,
      model_tonner,
      sector_id,
    });

    const printerUpdate = await this.printersRepository.save(printer);

    return printerUpdate;
  }
}

export { UpdatePrinterUseCase };
