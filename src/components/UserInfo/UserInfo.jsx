import { FaStar } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';

import css from './UserInfo.module.css';

export const UserInfo = ({ item }) => {
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
            Price / 1 hour:{' '}
            <span className={css.priceAmount}>{`${item.price_per_hour}$`}</span>
          </p>
          <button className={css.button}>
            <LuHeart className={css.svg} size={26} />
          </button>
        </div>
      </div>
      <div className={css.advantages}>
        <p className={css.advantagesItem}>Experience: {item.experience}</p>
        <p className={css.advantagesItem}></p>
        <p className={css.advantagesItem}></p>
        <p className={css.advantagesItem}></p>
      </div>
    </div>
  );
};
