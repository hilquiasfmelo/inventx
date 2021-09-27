import { container } from 'tsyringe';

import '@modules/accounts/providers';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { IPrintersRepository } from '@modules/printers/infra/interfaces/IPrintersRepository';
import { PrintersRepository } from '@modules/printers/infra/typeorm/repositories/implementations/PrintersRepository';
import { IComputersRepository } from '@modules/computers/infra/interfaces/IComputersRepository';
import { ComputersRepository } from '@modules/computers/infra/typeorm/repositories/implementations/ComputersRepository';
import { ISectorsRepository } from '@modules/sectors/infra/interfaces/ISectorsRepository';
import { SectorsRepository } from '@modules/sectors/infra/typeorm/repositories/implementations/SectorsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPrintersRepository>(
  'PrintersRepository',
  PrintersRepository,
);

container.registerSingleton<IComputersRepository>(
  'ComputersRepository',
  ComputersRepository,
);

container.registerSingleton<ISectorsRepository>(
  'SectorsRepository',
  SectorsRepository,
);
