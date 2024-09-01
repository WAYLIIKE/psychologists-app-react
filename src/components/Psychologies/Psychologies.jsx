import { useDispatch } from 'react-redux';
import { PsychologiesFilters } from '../PsychologiesFilters/PsychologiesFilters';
import { PsychologiesList } from '../PsychologiesList/PsychologiesList';
import css from './Psychologies.module.css';
import { fetchPsychol } from '../../redux/psychologies/psychologiesOps';
import { useState } from 'react';

export const Psychologies = () => {
  const dispatch = useDispatch();
  const [isLoadMore, setIsLoadMore] = useState(true);
  let currentLimit = 6;

  return (
    <div className={css.container}>
      <PsychologiesFilters />
      <PsychologiesList />
      {isLoadMore && (
        <button
          className={css.button}
          onClick={async () => {
            const res = await dispatch(
              fetchPsychol({ startAt: 0, limit: currentLimit })
            );
            if (res.payload.length !== currentLimit)
              return setIsLoadMore(false);
            currentLimit += 3;
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};
