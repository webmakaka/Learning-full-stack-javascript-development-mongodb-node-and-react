import React from 'react';
import Header from './Header.js';
import ContestList from './ContestList.js';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  componentDidMount() {}

  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
  };

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}
        />
      </div>
    );
  }
}

export default App;
