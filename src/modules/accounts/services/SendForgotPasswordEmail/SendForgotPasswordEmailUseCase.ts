import { inject, injectable } from 'tsyringe';
import path from 'path';
import { IUsersRepository } from '@modules/accounts/infra/interfaces/IUsersRepository';
import { IUserTokensRepository } from '@modules/accounts/infra/interfaces/IUserTokensRepository';
import { AppError } from '@shared/errors/AppError';
import { IMailProvider } from '@modules/accounts/providers/MailProvider/interfaces/IMailProvider';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      '..',
      'views',
      'forgot_password.hbs',
    );

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[Equipe InventX] Recuperação de Senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}

export { SendForgotPasswordEmailUseCase };
