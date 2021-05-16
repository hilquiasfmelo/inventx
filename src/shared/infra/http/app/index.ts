import express from 'express';

import '@shared/infra/typeorm';
import '@shared/container';

import { router } from '@shared/infra/http/routes';

const app = express();

app.use(express.json());

app.use(router);

export { app };
