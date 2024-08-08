import { FaStar } from 'react-icons/fa';

import css from './UserMore.module.css';

export const UserMore = ({ data }) => {
  return (
    <div className={css.container}>
      <ul className={css.reviewerList}>
        {data.map((item, idx) => (
          <li key={idx} className={css.reviewer}>
            <div className={css.wrapper}>
              <div className={css.logo}>{item.reviewer[0]}</div>
              <div>
                <p className={css.name}>{item.reviewer}</p>
                <div className={css.ratingWrapper}>
                  <FaStar size={16} color="#FFC531" />
                  <p className={css.rating}>{item.rating}</p>
                </div>
              </div>
            </div>
            <p className={css.comment}>{item.comment}</p>
          </li>
        ))}
      </ul>
      <button className={css.button}>Make an appointment</button>
    </div>
  );
};
