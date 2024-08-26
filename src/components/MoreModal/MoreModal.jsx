import css from './MoreModal.module.css';

export const MoreModal = ({ data }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Make an appointment with a psychologists</h1>
      <h2 className={css.subTitle}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </h2>
      <div className={css.mainBox}>
        <img
          src={data.avatar_url}
          alt={data.name}
          height={44}
          width={44}
          className={css.imgBox}
        />
        <div className={css.nameBox}>
          <h3 className={css.h3}>Your psychologists</h3>
          <p className={css.name}>{data.name}</p>
        </div>
      </div>
    </div>
  );
};
