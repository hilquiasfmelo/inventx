import { IComputerDTO } from '@modules/computers/dtos/IComputerDTO';
import { Computer } from '../typeorm/entities/Computer';

interface IComputersRepository {
  create(data: IComputerDTO): Promise<Computer>;

  index(): Promise<Computer[]>;

  findById(id: string): Promise<Computer>;

  findByRecord(number_tumble: string): Promise<Computer>;

  save(computer: Computer): Promise<Computer>;

  deleteById(id: string): Promise<void>;

  findComputerBySector(sector_id: string): Promise<Computer[]>;
}

export { IComputersRepository };
