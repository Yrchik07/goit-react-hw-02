import css from '../Profile/Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.cardBox}>
      <div className={css.user}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userEmail}>@{tag}</p>
        <p className={css.userCity}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
