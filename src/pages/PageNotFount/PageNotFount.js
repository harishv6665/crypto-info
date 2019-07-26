import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFount.css';

const PageNotFount = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Page Not Found</h1>
    <Link className={styles.link} to="/">Take me home</Link>
  </div>
);

export default PageNotFount;