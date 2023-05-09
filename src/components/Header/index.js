import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as CatdoroLogo } from 'assets/catdoro.svg';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerComponent}>
        <CatdoroLogo width={100} height={100} />
        <p>Catdoro</p>
        <p>User</p>
      </div>
    </div>
  );
}
