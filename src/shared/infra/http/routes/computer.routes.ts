import { Router } from 'express';

import { CreateComputerController } from '@modules/computers/services/createComputers/CreateComputersController';
import { ListComputersController } from '@modules/computers/services/listComputers/ListComputersController';
import { ListComputerBySectorController } from '@modules/computers/services/listComputerBySector/ListComputerBySectorController';
import { UpdateComputerController } from '@modules/computers/services/updateComputer/UpdateComputerController';
import { DeleteComputerController } from '@modules/computers/services/deleteComputer/DeleteComputerController';

import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/ensureIsAdmin';

const computersRoutes = Router();

const createComputersController = new CreateComputerController();
const listComputersController = new ListComputersController();
const listComputerBySectorController = new ListComputerBySectorController();
const updateComputerController = new UpdateComputerController();
const deleteComputerController = new DeleteComputerController();

computersRoutes.use(ensureAuthenticate, ensureIsAdmin);

computersRoutes.post('/', createComputersController.handle);
computersRoutes.get('/', listComputersController.handle);
computersRoutes.get('/:sector_id', listComputerBySectorController.handle);
computersRoutes.put('/:id', updateComputerController.handle);
computersRoutes.delete('/:id', deleteComputerController.handle);

export { computersRoutes };
