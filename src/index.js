import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return <h2 className="Header text-center">{message}</h2>;
};

Header.propTypes = {
  message: PropTypes.PropTypes.string
};

const App = () => {
  return (
    <div>
      <Header message="Naming Contests" />
      <div>...</div>
    </div>
  );
};

// App.defaultProps = {
//   headerMessage: 'Hello!'
// };

ReactDOM.render(
  <App headerMessage="Hello React with JSX!!" />,
  document.getElementById('root')
);
