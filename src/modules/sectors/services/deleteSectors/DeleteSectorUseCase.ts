import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { ISectorsRepository } from '@modules/sectors/infra/interfaces/ISectorsRepository';

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
