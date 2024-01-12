// import clsx from 'clsx';
import { BsWalletFill } from 'react-icons/bs';
import css from './Profile.module.css';
import defaultAvatar from './default-avatar.png';

export const Profile = ({ pilot: { name, email, age, avatar, active } }) => {
  const profileImage = avatar || defaultAvatar;

  // const statusClasses = clsx(css.status, {
  //   [css.isActive]: active,
  //   [css.isRetired]: !active,
  // });

  const statusClass = active ? css.isActive : css.isRetired;

  return (
    <div className="profile-container">
      <img src={profileImage} alt={name} width="120" height="120" />
      <h2 className={css.title}>{name}</h2>
      <p>
        <BsWalletFill /> {email}
      </p>
      <p>Age: {age}</p>
      {/* <p className={statusClasses}>Status: {active ? 'Active' : 'Retired'}</p> */}
      <p className={statusClass}>Status: {active ? 'Active' : 'Retired'}</p>
    </div>
  );
};
