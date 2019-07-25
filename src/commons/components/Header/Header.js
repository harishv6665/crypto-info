import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = ({ showMobileNav, toggleMobileNav, toggleTheme }) => (
  <header className={styles.header}>

    <NavLink to="/" className={styles.header__logo} />

    <nav className={classNames(styles.header__nav, {[styles.active]: showMobileNav})}>
      <NavLink
        to="/" exact
        activeClassName={styles.active}
        className={styles.header__nav__link}
        onClick={toggleMobileNav}
      >Overview</NavLink>
      <NavLink
        to="/liquidity"
        activeClassName={styles.active}
        className={styles.header__nav__link}
        onClick={toggleMobileNav}
      >Liquidity</NavLink>
    </nav>

    <button
      onClick={toggleTheme}
      className={styles.header__themeToggle}
    >
      <svg height="100%" width="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          className={styles.header__themeToggle__path}
          d="m57.8125 337.492188v57.175781c0 32.425781 26.453125 58.878906 58.878906 58.878906h57.175782l40.53125 40.53125c11.09375 11.09375 26.027343 17.28125 41.601562 17.28125s30.507812-6.1875 41.601562-17.28125l40.53125-40.53125h57.175782c32.425781 0 58.878906-26.453125 58.878906-58.878906v-57.175781l40.53125-40.53125c11.09375-11.09375 17.28125-26.027344 17.28125-41.601563s-6.1875-30.507813-17.28125-41.597656l-40.53125-40.535157v-57.171874c0-32.429688-26.453125-58.882813-58.878906-58.882813h-57.175782l-40.53125-40.53125c-22.1875-22.1875-61.015624-22.1875-83.203124 0l-40.53125 40.53125h-57.175782c-32.425781 0-58.878906 26.453125-58.878906 58.882813v57.171874l-40.53125 40.535157c-11.09375 11.089843-17.28125 26.023437-17.28125 41.597656s6.1875 30.507813 17.28125 41.601563zm198.1875-210.132813c8.746094 0 16 7.253906 16 16v224c0 8.746094-7.253906 16-16 16-74.238281 0-128-53.757813-128-128 0-74.238281 53.761719-128 128-128zm0 0"/>
      </svg>
    </button>

    <button
      onClick={toggleMobileNav}
      className={classNames(styles.header__navButton, {[styles.active]: showMobileNav})}
    >
      <span className={styles.header__navButton__line} />
      <span className={styles.header__navButton__line} />
      <span className={styles.header__navButton__line} />
    </button>

  </header>
);

Header.propTypes = {
  showMobileNav: PropTypes.bool,
  toggleMobileNav: PropTypes.func,
  toggleTheme: PropTypes.func,
};

Header.defaultProps = {
  showMobileNav: false,
  toggleMobileNav: f => f,
  toggleTheme: f => f,
};

export default Header;