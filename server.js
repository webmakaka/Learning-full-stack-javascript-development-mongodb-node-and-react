import express from 'express';
import config from './config.js';
import apiRouter from './api';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.log('Express listening on port ', config.port);
});
