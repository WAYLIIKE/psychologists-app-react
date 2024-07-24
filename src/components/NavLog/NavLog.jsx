import css from './NavLog.module.css';

export const NavLog = () => {
  return (
    <div className={css.container}>
      <button className={css.login}>Log In</button>
      <button className={css.register}>Registration</button>
    </div>
  );
};
