import { Router } from 'express';

import { ResetPasswordUserController } from '@modules/accounts/services/resetPasswordUser/ResetPasswordUserController';
import { SendForgotPasswordEmailController } from '@modules/accounts/services/SendForgotPasswordEmail/SendForgotPasswordEmailController';

const passwordRoutes = Router();

passwordRoutes.post('/forgot', new SendForgotPasswordEmailController().handle);
passwordRoutes.post('/reset', new ResetPasswordUserController().handle);

export { passwordRoutes };
