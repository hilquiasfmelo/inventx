import { Router } from 'express';

import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/ensureIsAdmin';
import { CreatePrintersController } from '@modules/printers/services/createPrinters/CreatePrintersController';
import { ListPrintersController } from '@modules/printers/services/listPrinters/ListPrintersController';
import { ListPrinterBySectorController } from '@modules/printers/services/listPrinterBySector/ListPrinterBySectorController';
import { UpdatePrinterController } from '@modules/printers/services/updatePrinter/UpdatePrinterController';
import { DeletePrinterController } from '@modules/printers/services/deletePrinter/DeletePrinterController';

const printersRoutes = Router();

printersRoutes.use(ensureAuthenticate, ensureIsAdmin);

printersRoutes.post('/', new CreatePrintersController().handle);
printersRoutes.get('/', new ListPrintersController().handle);
printersRoutes.get('/:sector_id', new ListPrinterBySectorController().handle);
printersRoutes.put('/:id', new UpdatePrinterController().handle);
printersRoutes.delete('/:id', new DeletePrinterController().handle);

export { printersRoutes };
