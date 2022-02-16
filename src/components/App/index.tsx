import { useEffect } from 'react';
import { IconCSS, IconJS, IconWebpack } from '../SVGIcon';
import styles from './index.css';

export const App = () => {
  useEffect(() => {
    fetch('http://localhost:3001/api/list')
      .then(res => res.json())
      .then(res => console.log('res', res));
  }, []);

  return (
    <div className={styles.app}>
      <IconJS />
      <IconCSS />
      <IconWebpack />
    </div>
  );
};
