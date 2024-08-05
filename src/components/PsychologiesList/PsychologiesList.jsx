import { useSelector } from 'react-redux';
import { PsychologiesListItem } from '../PsychologiesListItem/PsychologiesListItem';
import css from './PsychologiesList.module.css';
import { selectPsychologies } from '../../redux/selectors';

export const PsychologiesList = () => {
  const psychologies = useSelector(selectPsychologies);

  return (
    <ul className={css.container}>
      {psychologies.map((item, idx) => (
        <PsychologiesListItem key={idx} item={item} />
      ))}
    </ul>
  );
};
