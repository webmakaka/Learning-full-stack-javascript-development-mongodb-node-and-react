import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import ContestList from './ContestList.js';
import Contest from './Contest.js';
import * as api from '../api.js';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = this.props.initialData;

  componentDidMount() {}

  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);

    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
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
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object.isRequired
};

export default App;
