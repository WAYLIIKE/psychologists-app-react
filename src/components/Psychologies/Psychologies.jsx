import { PsychologiesFilters } from '../PsychologiesFilters/PsychologiesFilters';
import css from './Psychologies.module.css';

export const Psychologies = () => {
  return (
    <div className={css.container}>
      <PsychologiesFilters />
    </div>
  );
};
