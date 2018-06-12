import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview.js';

const ContestList = ({ contests }) => (
  <div>
    {contests.map(contest => <ContestPreview key={contest.id} {...contest} />)}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.array
};

export default ContestList;
