import { PsychologiesFilters } from '../PsychologiesFilters/PsychologiesFilters';
import { PsychologiesList } from '../PsychologiesList/PsychologiesList';
import css from './Psychologies.module.css';

export const Psychologies = () => {
  return (
    <div className={css.container}>
      <PsychologiesFilters />
      <PsychologiesList />
      <button className={css.button}>Load more</button>
    </div>
  );
};
