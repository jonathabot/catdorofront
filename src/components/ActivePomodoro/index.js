import React from 'react';
import styles from './ActivePomodoro.module.css';

export default function ActivePomodoro() {
  return (
    <div className={styles.activePomodoro}>
      <div className={styles.pomodoro}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/356/476/original/classic-white-wall-clock-png.png"
          width={200}
        />
        <p>Start Pomodoro</p>
      </div>
    </div>
  );
}
