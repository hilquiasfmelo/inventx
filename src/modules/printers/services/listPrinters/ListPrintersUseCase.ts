import { Printer } from '@modules/printers/infra/typeorm/entities/Printer';
import { PrintersRepository } from '@modules/printers/infra/typeorm/repositories/implementations/PrintersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPrintersUseCase {
  constructor(
    @inject('PrintersRepository')
    private printersRepository: PrintersRepository,
  ) {}

  async execute(): Promise<Printer[]> {
    const printers = await this.printersRepository.index();

    return printers;
  }
}

export { ListPrintersUseCase };
