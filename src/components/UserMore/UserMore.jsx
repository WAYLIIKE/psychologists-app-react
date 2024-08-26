import { FaStar } from 'react-icons/fa';
import { BaseModal } from '../BaseModal/BaseModal';

import css from './UserMore.module.css';
import { useState } from 'react';
import { MoreModal } from '../MoreModal/MoreModal';

export const UserMore = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((prev) => {
      return !prev;
    });
  };

  return (
    <div className={css.container}>
      <ul className={css.reviewerList}>
        {data.reviews.map((item, idx) => (
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
      <button className={css.button} onClick={handleOpenModal}>
        Make an appointment
      </button>
      <BaseModal isOpen={openModal} onClose={handleOpenModal}>
        <MoreModal data={data} />
      </BaseModal>
    </div>
  );
};
