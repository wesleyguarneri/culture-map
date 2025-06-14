import Container from '@components/Container';
import styles from './Header.module.scss';
import { Menu, Switcher } from '@carbon/icons-react'
import {
  Header,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SwitcherItem,
} from '@carbon/react';
import { FALSE } from 'sass';

const NavHeader = () => {
  return (
    <Header className={styles.header}>
        <HeaderName href="/" prefix="" className={styles.headerTitle}>
          The Written World
        </HeaderName>
        {/* <HeaderMenuButton
          className={styles.headerIcon}
          aria-label="Open menu"
          isCollapsible
        /> */}
        {/* <Switcher aria-label="Switcher Container">
          <SwitcherItem aria-label="About"
            children="about">
          </SwitcherItem>
        </Switcher> */}
    </Header>
  );
};

export default NavHeader;
