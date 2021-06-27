import sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

export class LocalDB {
  db: any;

  constructor() {
    this.db = new sqlite3.Database(
      './db/gql.db',
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to database.');
      }
    );
  }

  allUsers(res: any) {
    let users: object[] = [];
    console.log('setUsers()');
    this.db.all('SELECT * FROM user', async (err: any, results: any) => {
      if (err) {
        console.error({ error: err });
        return;
      } else {
        res.json(results);
      }
    });
    return users;
  }

  insertQuery(query: string, res: any) {
    this.db.all(query.toString(), async (err: any, results: any) => {
      if (err) {
        console.error(err);
        res.json({ error: err });
        return;
      } else {
        console.log(results);
        await res.json({
          status: 'A row has been inserted',
        });
      }
    });
  }

  close = () => {
    this.db.close((err: any) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  };
}
