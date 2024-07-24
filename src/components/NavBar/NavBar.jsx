import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavLog } from '../NavLog/NavLog';

import css from './NavBar.module.css';

export const NavBar = () => {
  // const isRegistred = false;
  return (
    <div className={css.navBar}>
      <Container>
        <header className={css.container}>
          <nav className={css.linkMenu}>
            <Logo />
            <NavLinks />
          </nav>
          <NavLog />
        </header>
      </Container>
      <div className={css.div}></div>
    </div>
  );
};
