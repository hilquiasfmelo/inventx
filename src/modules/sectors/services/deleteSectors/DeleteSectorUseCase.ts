import { inject, injectable } from 'tsyringe';

import { ISectorsRepository } from '@modules/sectors/repositories/interfaces/ISectorsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteSectorUseCase {
  constructor(
    @inject('SectorsRepository')
    private sectorsRepository: ISectorsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const sector = await this.sectorsRepository.findById(id);

    if (!sector) {
      throw new AppError('Sector not found');
    }

    await this.sectorsRepository.delete(id);
  }
}

export { DeleteSectorUseCase };
