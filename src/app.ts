import express from 'express';
import path from 'path';
import { router } from './router';

export const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (_req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use('/api/v1', router);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
