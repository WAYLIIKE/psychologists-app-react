import { useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavLog } from '../NavLog/NavLog';

import css from './NavBar.module.css';
import { selectUser } from '../../redux/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectUser);

  return (
    <div className={css.navBar}>
      <Container>
        <header className={css.container}>
          <nav className={css.linkMenu}>
            <Logo />
            <NavLinks />
          </nav>
          {isLoggedIn ? <UserMenu /> : <NavLog />}
        </header>
      </Container>
      <div className={css.div}></div>
    </div>
  );
};
