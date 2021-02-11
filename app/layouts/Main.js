import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

class Main extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="wrapper">
            <Helmet titleTemplate="%s | Neel Shah" defaultTitle="Neel Shah" />
        <Header />
        <div id="main">
          {this.props.children}
        </div>
        {!this.props.fullPage && <Nav />}
      </div>);
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;
