import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SendForgotPasswordEmailUseCase } from './SendForgotPasswordEmailUseCase';

class SendForgotPasswordEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmailUseCase = container.resolve(
      SendForgotPasswordEmailUseCase,
    );

    await sendForgotPasswordEmailUseCase.execute({ email });

    return response.status(204).send();
  }
}

export { SendForgotPasswordEmailController };
