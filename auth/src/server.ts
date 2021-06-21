import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import pingRouter from './routes/ping';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  // tslint:disable-next-line:no-console
  console.log(`Test GET api AUTH api module`);
  return res.json({ msg: 'hello from test GET' });
});

app.get('/contact', (req, res) => {
  // tslint:disable-next-line:no-console
  console.log(`Test GET /contact api AUTH api module`);
  return res.json({ msg: 'hello from test GET /contact' });
});

app.use('/ping', pingRouter);

export default app;