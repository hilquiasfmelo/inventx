import { IPrinterDTO } from '@modules/printers/dtos/IPrinterDTO';
import { IPrintersRepository } from '@modules/printers/infra/interfaces/IPrintersRepository';
import { getRepository, Repository } from 'typeorm';
import { Printer } from '../../entities/Printer';

class PrintersRepository implements IPrintersRepository {
  private printersRepository: Repository<Printer>;

  constructor() {
    this.printersRepository = getRepository(Printer);
  }

  async create({
    id,
    name,
    number_tumble,
    model_tonner,
    sector_id,
  }: IPrinterDTO): Promise<Printer> {
    const printer = this.printersRepository.create({
      id,
      name,
      number_tumble,
      model_tonner,
      sector_id,
    });

    await this.printersRepository.save(printer);

    return printer;
  }

  async index(): Promise<Printer[]> {
    return this.printersRepository.find();
  }

  async findById(id: string): Promise<Printer> {
    return this.printersRepository.findOne(id);
  }

  async findByRecord(number_tumble: string): Promise<Printer> {
    const printer = await this.printersRepository.findOne({ number_tumble });

    return printer;
  }

  async findPrinterBySector(sector_id: string): Promise<Printer[]> {
    const printers = await this.printersRepository.find({
      where: { sector_id },
      relations: ['sector'],
    });

    return printers;
  }

  async save(printer: Printer): Promise<Printer> {
    return this.printersRepository.save(printer);
  }

  async deleleById(id: string): Promise<void> {
    await this.printersRepository.delete(id);
  }
}

export { PrintersRepository };
