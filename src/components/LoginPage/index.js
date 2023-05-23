import React from 'react';
import styles from './LoginPage.module.css';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginComponent}>
        <h1>Login</h1>
        <form className={styles.loginForm}>
          <div className={styles.loginFields}>
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div className={styles.loginFields}>
            <label>Password</label>
            <input type="text"></input>
          </div>
          <input
            type="submit"
            value="LOGIN"
            className={styles.formButton}
          ></input>
        </form>
        <div className={styles.loginSignUp}>
          <p>Or Sign up using</p>
          <Link to="/signup" className={styles.signUpButton}>
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
