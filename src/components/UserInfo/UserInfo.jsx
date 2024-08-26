import { FaStar } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';

import css from './UserInfo.module.css';
import { useState } from 'react';
import { UserMore } from '../UserMore/UserMore';

export const UserInfo = ({ item }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMoreClick = () => {
    setIsReadMore((prev) => !prev);
  };
  return (
    <div className={css.container}>
      <div className={css.upperDiv}>
        <div>
          <p className={css.subtitle}>Psychologist</p>
          <h2 className={css.name}>{item.name}</h2>
        </div>
        <div className={css.upperInfo}>
          <FaStar color="#FFC531" size={16} />
          <p className={css.rating}>Rating: {item.rating}</p>
          <div className={css.div}></div>
          <p className={css.price}>
            Price / 1 hour:
            <span
              className={css.priceAmount}
            >{` ${item.price_per_hour}$`}</span>
          </p>
          <button className={css.button}>
            <LuHeart className={css.svg} size={26} />
          </button>
        </div>
      </div>
      <ul className={css.advantages}>
        <li className={css.advantagesItem}>
          Experience: <span className={css.spanWord}>{item.experience}</span>
        </li>
        <li className={css.advantagesItem}>
          License: <span className={css.spanWord}>{item.license}</span>
        </li>
        <li className={css.advantagesItem}>
          Specialization:{' '}
          <span className={css.spanWord}>{item.specialization}</span>
        </li>
        <li className={css.advantagesItem}>
          Initial consultation:{' '}
          <span className={css.spanWord}>{item.initial_consultation}</span>
        </li>
      </ul>
      <p className={css.about}>{item.about}</p>
      {isReadMore ? (
        <UserMore data={item} />
      ) : (
        <button className={css.readMore} onClick={() => handleReadMoreClick()}>
          Read more
        </button>
      )}
    </div>
  );
};
