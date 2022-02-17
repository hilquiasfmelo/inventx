import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/services/createUsers/CreateUserController';
import { ListUsersController } from '@modules/accounts/services/listUsers/ListUsersController';
import { UpdateUserController } from '@modules/accounts/services/updateUser/UpdateUserController';
import { AuthenticateUserController } from '@modules/accounts/services/authenticateUser/AuthenticateUserController';
import { DeleteUserController } from '@modules/accounts/services/deleteUser/DeleteUserController';

import { ensureAuthenticate } from '@shared/infra/http/middlewares/ensureAuthenticate';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/ensureIsAdmin';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post('/sessions', authenticateUserController.handle);

usersRoutes.post('/', createUserController.hanlde);

usersRoutes.use(ensureAuthenticate, ensureIsAdmin);

usersRoutes.get('/', listUsersController.handle);
usersRoutes.put('/:id', updateUserController.handle);
usersRoutes.delete('/:id', deleteUserController.handle);

export { usersRoutes };
