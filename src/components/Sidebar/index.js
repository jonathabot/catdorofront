import styles from './Sidebar.module.css';
import React from 'react';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <ul>
          <li>Your Pomodoros</li>
        </ul>
      </div>
    </div>
  );
}
