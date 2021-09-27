import { getRepository, Repository } from 'typeorm';

import { ICreateSectorDTO } from '@modules/sectors/dtos/ICreateSectorDTO';
import { ISectorsRepository } from '@modules/sectors/infra/interfaces/ISectorsRepository';
import { Sector } from '../../entities/Sector';

class SectorsRepository implements ISectorsRepository {
  private sectorsRepository: Repository<Sector>;

  constructor() {
    this.sectorsRepository = getRepository(Sector);
  }

  async index(): Promise<Sector[]> {
    const sectors = await this.sectorsRepository.find();

    return sectors;
  }

  async create({ name }: ICreateSectorDTO): Promise<Sector> {
    const sector = this.sectorsRepository.create({
      name,
    });

    await this.sectorsRepository.save(sector);

    return sector;
  }

  async findById(id: string): Promise<Sector> {
    const sector = await this.sectorsRepository.findOne(id);

    return sector;
  }

  async findByName(name: string): Promise<Sector> {
    const sector = await this.sectorsRepository.findOne({ name });

    return sector;
  }

  async save(sector: Sector): Promise<Sector> {
    return this.sectorsRepository.save(sector);
  }

  async delete(id: string): Promise<void> {
    await this.sectorsRepository.delete(id);
  }
}

export { SectorsRepository };
