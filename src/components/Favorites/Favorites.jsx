import { PsychologiesFilters } from '../PsychologiesFilters/PsychologiesFilters';

import css from './Favorites.module.css';

export const Favorites = () => {
  return (
    <div className={css.container}>
      <PsychologiesFilters />
      <button className={css.button}>Load more</button>
    </div>
  );
};
