// import css from './FavoritesPage.module.css';

import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { NavBar } from '../../components/NavBar/NavBar';

export default function FavoritesPage() {
  return (
    <div>
      <Helmet>
        <title>Favorites | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container></Container>
    </div>
  );
}
