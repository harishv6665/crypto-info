import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { getCryptoList } from '../../actions/actions';
import styles from './App.css';
import Header from './../../components/Header/Header';
import Liquidity from '../../../pages/Liquidity/Liquidity';
import Overview from '../../../pages/Overview/Overview';
import PageNotFount from '../../../pages/PageNotFount/PageNotFount';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false,
      theme: '',
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCryptoList());
  }

  toggleTheme() {
    const theme = this.state.theme === '' ? 'light' : '';
    this.setState({ theme });
    document.documentElement.classList.add('theme-transition');
    document.documentElement.setAttribute('data-theme', theme);
    window.setTimeout(function() {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
  }

  toggleMobileNav() {
    this.setState({ showMobileNav: !this.state.showMobileNav });
  }

  render() {
    const { showMobileNav } = this.state;
    return (
      <div className={styles.wrapper}>
        <Header toggleMobileNav={this.toggleMobileNav} toggleTheme={this.toggleTheme} showMobileNav={showMobileNav} />
        <main className={styles.container}>
          <Switch>
            <Route path="/" exact component={Overview} />
            <Route path="/liquidity" component={Liquidity} />
            <Route component={PageNotFount} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

App.defaultProps = {
  dispatch: f => f,
};

export default connect()(App);
