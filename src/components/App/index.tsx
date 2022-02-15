import { IconCSS, IconJS, IconWebpack } from '../SVGIcon';
import styles from './index.css';

export const App = () => (
  <div className={styles.app}>
    <IconJS />
    <IconCSS />
    <IconWebpack />
  </div>
);
