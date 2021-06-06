import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

if (!process.env.PORT) {
  console.log(`PORT is not set`);
  process.exit(1);
}

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log(`Test GET api`);
  return res.json({ msg: 'hello from test GET' });
});

app.listen(process.env.PORT, () => {
  console.log(`Test from ofcproject`);
  console.log(`PORT: ${process.env.PORT}`);
});