import axios from 'axios';

export const fetchContest = contestId => {
  return axios
    .get(`/api/contests/${contestId}`)
    .then(resp => resp.data.contest);
};

export const fetchContestList = () => {
  return axios.get('/api/contests').then(resp => resp.data.contest);
};
