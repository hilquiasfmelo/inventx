import { IPrintersRepository } from '@modules/printers/infra/interfaces/IPrintersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeletePrinterUseCase {
  constructor(
    @inject('PrintersRepository')
    private printersRepository: IPrintersRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const printer = this.printersRepository.findById(id);

    if (!printer) {
      throw new AppError('Printer not found');
    }

    await this.printersRepository.deleleById(id);
  }
}

export { DeletePrinterUseCase };
