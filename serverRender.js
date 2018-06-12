import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App.js';

import axios from 'axios';
import config from './config.js';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`).then(resp => {
    return ReactDOMServer.renderToString(
      <App initialContests={resp.data.contests} />
    );
  });

export default serverRender;
