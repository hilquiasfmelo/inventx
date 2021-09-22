import { Router } from 'express';

import { CreateSectorsController } from '@modules/sectors/services/createSectors/CreateSectorsController';
import { ListSectorsController } from '@modules/sectors/services/listSectors/ListSectorsController';

import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/ensureIsAdmin';

const sectorsRoutes = Router();

const createSectorsController = new CreateSectorsController();
const listSectorsController = new ListSectorsController();

sectorsRoutes.use(ensureAuthenticate, ensureIsAdmin);

sectorsRoutes.post('/', createSectorsController.handle);
sectorsRoutes.get('/', listSectorsController.handle);

export { sectorsRoutes };
