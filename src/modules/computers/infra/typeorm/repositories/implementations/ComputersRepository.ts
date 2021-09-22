import { IComputerDTO } from '@modules/computers/dtos/IComputerDTO';
import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';
import { getRepository, Repository } from 'typeorm';
import { Computer } from '../../entities/Computer';

class ComputersRepository implements IComputersRepository {
  private computersRepository: Repository<Computer>;

  constructor() {
    this.computersRepository = getRepository(Computer);
  }

  async create({
    id,
    brand,
    description,
    number_tumble,
    number_remote,
    sector_id,
  }: IComputerDTO): Promise<Computer> {
    const computer = this.computersRepository.create({
      id,
      brand,
      description,
      number_tumble,
      number_remote,
      sector_id,
    });

    await this.computersRepository.save(computer);

    return computer;
  }

  async index(): Promise<Computer[]> {
    return this.computersRepository.find();
  }

  async findById(id: string): Promise<Computer> {
    return this.computersRepository.findOne(id);
  }

  async findByRecord(number_tumble: string): Promise<Computer> {
    const computer = await this.computersRepository.findOne({ number_tumble });

    return computer;
  }

  async save(computer: Computer): Promise<Computer> {
    return this.computersRepository.save(computer);
  }

  async deleteById(id: string): Promise<void> {
    await this.computersRepository.delete(id);
  }

  async findComputerBySector(sector_id: string): Promise<Computer[]> {
    const computers = await this.computersRepository.find({
      where: { sector_id },
      relations: ['sector'],
    });

    return computers;
  }
}

export { ComputersRepository };
