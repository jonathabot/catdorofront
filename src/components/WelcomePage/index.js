import React from 'react';
import styles from './Welcomepage.module.css';

export default function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
      <h1>Hello, Little Person. Welcome to Catdoro!</h1>
      <img
        src="https://i.pinimg.com/originals/80/5d/92/805d9290bf80860153c6804cc0ed2d3a.gif"
        alt="female cat doing the 'yes i can' iconic reimagination "
        width={250}
      ></img>
      <p>
        Are you ready to finally be able to focus for free?? We're building
        something really special for you! :)
      </p>
    </div>
  );
}
