import { Router } from 'express';

import { CreatePrintersController } from '@modules/printers/services/createPrinters/CreatePrintersController';
import { ListPrintersController } from '@modules/printers/services/listPrinters/ListPrintersController';
import { ListPrinterBySectorController } from '@modules/printers/services/listPrinterBySector/ListPrinterBySectorController';
import { UpdatePrinterController } from '@modules/printers/services/updatePrinter/UpdatePrinterController';
import { DeletePrinterController } from '@modules/printers/services/deletePrinter/DeletePrinterController';

import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/ensureIsAdmin';

const printersRoutes = Router();

const createPrintersController = new CreatePrintersController();
const listPrintersController = new ListPrintersController();
const listPrinterBySectorController = new ListPrinterBySectorController();
const updatePrinterController = new UpdatePrinterController();
const deletePrinterController = new DeletePrinterController();

printersRoutes.use(ensureAuthenticate, ensureIsAdmin);

printersRoutes.post('/', createPrintersController.handle);
printersRoutes.get('/', listPrintersController.handle);
printersRoutes.get('/:sector_id', listPrinterBySectorController.handle);
printersRoutes.put('/:id', updatePrinterController.handle);
printersRoutes.delete('/:id', deletePrinterController.handle);

export { printersRoutes };
