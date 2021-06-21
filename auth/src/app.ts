import dotenv from 'dotenv';
import server from './server';

// Initialise the env vars
dotenv.config();

if (!process.env.PORT) {
  // tslint:disable-next-line:no-console
  console.log(`PORT is not set`);
  process.exit(1);
}

const app = server.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Test from ofcproject Auth module`);
  // tslint:disable-next-line:no-console
  console.log(`PORT: ${process.env.PORT}`);
});