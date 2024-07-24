import css from './LoginModal.module.css';

export const LoginModal = () => {
  return (
    <div className={css.container}>
      <h1>Log In</h1>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
    </div>
  );
};
