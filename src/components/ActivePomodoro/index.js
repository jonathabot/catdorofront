import React from 'react';
import styles from './ActivePomodoro.module.css';
import PomodoroClock from 'components/PomodoroClock';

export default function ActivePomodoro() {
  return (
    <div className={styles.activePomodoro}>
      <div className={styles.pomodoro}>
        <PomodoroClock />
        <button className={styles.startButton}>Start Pomodoro</button>
      </div>
    </div>
  );
}
