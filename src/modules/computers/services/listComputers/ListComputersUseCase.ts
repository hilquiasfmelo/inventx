import { inject, injectable } from 'tsyringe';
import { Computer } from '@modules/computers/infra/typeorm/entities/Computer';
import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';

@injectable()
class ListComputersUseCase {
  constructor(
    @inject('ComputersRepository')
    private computersRepository: IComputersRepository,
  ) {}

  async execute(): Promise<Computer[]> {
    const computers = await this.computersRepository.index();

    return computers;
  }
}

export { ListComputersUseCase };
