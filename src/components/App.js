import React from 'react';
import Header from './Header.js';
import ContestList from './ContestList.js';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
