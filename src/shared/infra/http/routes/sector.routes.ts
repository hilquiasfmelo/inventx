import { Router } from 'express';

import { CreateSectorsController } from '@modules/sectors/services/createSectors/CreateSectorsController';
import { ListSectorsController } from '@modules/sectors/services/listSectors/ListSectorsController';
import { UpdateSectorController } from '@modules/sectors/services/updateSectors/UpdateSectorController';
import { DeleteSectorController } from '@modules/sectors/services/deleteSectors/DeleteSectorController';

import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/ensureIsAdmin';

const sectorsRoutes = Router();

const createSectorsController = new CreateSectorsController();
const listSectorsController = new ListSectorsController();
const updateSectorController = new UpdateSectorController();
const deleteSectorController = new DeleteSectorController();

sectorsRoutes.use(ensureAuthenticate, ensureIsAdmin);

sectorsRoutes.post('/', createSectorsController.handle);
sectorsRoutes.get('/', listSectorsController.handle);
sectorsRoutes.put('/:id', updateSectorController.handle);
sectorsRoutes.delete('/:id', deleteSectorController.handle);

export { sectorsRoutes };
