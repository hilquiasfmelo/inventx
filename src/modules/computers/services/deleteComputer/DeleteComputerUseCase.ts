import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteComputerUseCase {
  constructor(
    @inject('ComputersRepository')
    private computersRepository: IComputersRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const computer = this.computersRepository.findById(id);

    if (!computer) {
      throw new AppError('Computer not found');
    }

    await this.computersRepository.deleteById(id);
  }
}

export { DeleteComputerUseCase };
