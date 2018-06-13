import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import ContestList from './ContestList.js';
import Contest from './Contest.js';
import * as api from '../api.js';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  componentDidMount() {}

  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);

    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }

    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object.isRequired
};

export default App;
