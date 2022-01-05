import { Router } from 'express';

import { usersRoutes } from './user.routes';
import { printersRoutes } from './printer.routes';
import { computersRoutes } from './computer.routes';
import { sectorsRoutes } from './sector.routes';
import { passwordRoutes } from './password.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/password', passwordRoutes);
router.use('/printers', printersRoutes);
router.use('/computers', computersRoutes);
router.use('/sectors', sectorsRoutes);

export { router };
