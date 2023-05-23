import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/jonathabot" className={styles.footerText}>
        Created by Jonatha Bot
      </a>
    </div>
  );
}
