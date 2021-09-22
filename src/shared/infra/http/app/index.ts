import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/container';

import { router } from '@shared/infra/http/routes';
import { ServerError } from '@shared/errors/ServerError';

const app = express();

app.use(express.json());

app.use(router);

app.use(ServerError);

export { app };
