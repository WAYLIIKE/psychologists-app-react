import { NavBar } from '../../components/NavBar/NavBar';
import { Helmet } from 'react-helmet-async';

import css from './HomePage.module.css';
import { Container } from '../../components/Container/Container';

export default function HomePage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Home | Psychologists.Services</title>
      </Helmet>
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}
