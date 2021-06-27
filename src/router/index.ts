import express from 'express';
import { getAllUsers, runQuery } from '../db/selectQueries';
const router = express.Router();
// import faker from 'faker';

router.use(express.json());

router.get('/', (_req: any, res: any, _next: any) => {
  res.send('Hello from {router} in api/v1');
});

//* http://localhost:3000/api/v1/users
router.get('/users', (_req: any, res: any) => {
  getAllUsers(res);
});

//* http://localhost:3000/api/v1/insertQuery
router.get('/insertQuery', (_req: any, res: any) => {
  const reqBody = {
    query:
      "INSERT INTO user(first_name, last_name) VALUES('Sam', 'Jackson'), ('Alex', 'Jefferson')",
  };
  const { query } = reqBody;
  runQuery(query, res);
});

router.get('/json', (_req: any, res: any, _next: any) => {
  res.json({ hello: 'world' });
});

export { router };
