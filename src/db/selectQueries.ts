import { LocalDB as DB } from '../db';

export const getAllUsers = (res: any) => {
  const db = new DB();
  db.allUsers(res);
  db.close;
};

export const runQuery = (query: string, res: any) => {
  const db = new DB();
  db.insertQuery(query, res);
  db.close;
};
