import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/services/createUser/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.hanlde);

export { usersRoutes };
