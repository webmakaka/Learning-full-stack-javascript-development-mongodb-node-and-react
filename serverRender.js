import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App.js';

import axios from 'axios';
import config from './config.js';

const getApiUrl = contestId => {
  if (contestId) {
    return `${config.serverUrl}/api/contests/${contestId}`;
  }

  return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData.contest.id,
      contests: {
        [apiData.contest.id]: apiData.contest
      }
    };
  }

  return {
    contests: apiData.contests
  };
};

const serverRender = contestId =>
  axios.get(getApiUrl(contestId)).then(resp => {
    const initialData = getInitialData(contestId, resp.data);

    console.log('initialData');
    console.log(initialData);

    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} />
      ),

      initialData
    };
  });

export default serverRender;
