// import css from './PsychologistsPage.module.css';

import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { NavBar } from '../../components/NavBar/NavBar';

export default function PsychologistsPage() {
  return (
    <div>
      <Helmet>
        <title>Psychologists | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container></Container>
    </div>
  );
}
