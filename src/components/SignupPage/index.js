import React from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpComponent}>
        <h1>Sign Up to Catdoro</h1>
        <form className={styles.signUpForm}>
          <div className={styles.signUpFields}>
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div className={styles.signUpFields}>
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div className={styles.signUpFields}>
            <label>Password</label>
            <input type="text"></input>
          </div>
          <input
            type="submit"
            value="SIGN UP"
            className={styles.formButton}
          ></input>
        </form>
        <div className={styles.signUpLogin}>
          <p>Already signed up? </p>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
