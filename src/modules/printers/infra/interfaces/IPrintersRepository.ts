import { IPrinterDTO } from '@modules/printers/dtos/IPrinterDTO';
import { Printer } from '../typeorm/entities/Printer';

interface IPrintersRepository {
  create({
    id,
    name,
    number_tumble,
    model_tonner,
  }: IPrinterDTO): Promise<Printer>;

  index(): Promise<Printer[]>;

  findById(id: string): Promise<Printer>;

  findByRecord(number_tumble: string): Promise<Printer>;

  findPrinterBySector(sector_id: string): Promise<Printer[]>;

  save(printer: Printer): Promise<Printer>;

  deleleById(id: string): Promise<void>;
}

export { IPrintersRepository };
