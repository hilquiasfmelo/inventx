import { ICreateSectorDTO } from '@modules/sectors/dtos/ICreateSectorDTO';
import { Sector } from '@modules/sectors/infra/typeorm/entities/Sector';

interface ISectorsRepository {
  create(data: ICreateSectorDTO): Promise<Sector>;

  index(): Promise<Sector[]>;

  findById(id: string): Promise<Sector>;

  findByName(name: string): Promise<Sector>;
}

export { ISectorsRepository };
