import { Logo } from '../Logo/Logo';

import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={css.container}>
      <Logo />
    </div>
  );
};
