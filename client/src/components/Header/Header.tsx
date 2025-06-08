import Container from '@components/Container';
import styles from './Header.module.scss';
import { Menu, Switcher } from '@carbon/icons-react'
import {
  Header,
  HeaderMenuButton,
  HeaderName,
} from '@carbon/react';

const NavHeader = () => {
  return (
    <Header className={styles.header}>
        <HeaderName href="/" prefix="" className={styles.headerTitle}>
          The Written World
        </HeaderName>
        <HeaderMenuButton
          className={styles.headerIcon}
          aria-label="Open menu"
          isCollapsible
        />      
    </Header>
  );
};

export default NavHeader;
