import express from 'express';

import './database';
import './shared/container';

import { router } from './routes'

const app = express();

app.use(express.json());

app.use(router)

app.listen(4444, () => console.log('Server run on port 4444'));