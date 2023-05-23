import React from 'react';
import styles from './Header.module.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerComponent}>
        <Link to="/" className={styles.catdoroLogo}>
          Catdoro
        </Link>
        <div to="/login" className={styles.loginOrSignUp}>
          <PersonIcon className={styles.userIcon} />
          <span>
            Hello, Little Person!{' '}
            <Link to="/login" className={styles.linkButton}>
              Login
            </Link>{' '}
            or{' '}
            <Link to="/signup" className={styles.linkButton}>
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
