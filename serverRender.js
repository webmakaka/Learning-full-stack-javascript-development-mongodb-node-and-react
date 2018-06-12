import axios from 'axios';
import config from './config.js';

axios.get(`${config.serverUrl}/api/contests`).then(resp => {
  console.log(resp.data);
});
