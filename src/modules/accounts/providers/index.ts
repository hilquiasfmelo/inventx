import { container } from 'tsyringe';
import { BCryptHashProvider } from './HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from './HashProvider/interfaces/IHashProvider';
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';
import { IMailProvider } from './MailProvider/interfaces/IMailProvider';
import { HandlebarsMailTemplateProvider } from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';
import { IMailTemplateProvider } from './MailTemplateProvider/interfaces/IMailTemplateProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
