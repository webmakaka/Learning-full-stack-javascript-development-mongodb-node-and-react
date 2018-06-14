import express from 'express';
import config from './config.js';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
const mongoose = require('mongoose');

const server = express();

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);

server.set('view engine', 'ejs');

import serverRender from './serverRender.js';

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.log('Express listening on port ', config.port);
});

mongoose.connect(
  config.dbUrl,
  err => {
    if (err) {
      console.log('Cannot connect to the database');
      return console.log(err);
    }

    console.log('Connected to the database');
  }
);
