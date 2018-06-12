import express from 'express';
import config from './config.js';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);

server.set('view engine', 'ejs');

import './serverRender.js';

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS!</em>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.log('Express listening on port ', config.port);
});
