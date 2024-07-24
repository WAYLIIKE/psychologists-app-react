import { NavBar } from '../../components/NavBar/NavBar';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';

import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Home | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container></Container>
    </div>
  );
}
