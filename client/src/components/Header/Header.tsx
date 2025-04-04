import Container from '@components/Container';

import styles from './Header.module.scss';
import { Menu } from '@carbon/icons-react';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          The Written World
        </h1>
        <Menu size="32" className={styles.menuIcon} />
      </Container>
    </header>
  );
};

export default Header;
