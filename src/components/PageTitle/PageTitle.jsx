import { BsArrowThroughHeartFill } from 'react-icons/bs';
import css from './PageTitle.module.css';

export const PageTitle = ({ children }) => {
  return (
    <h1 className={css.title}>
      <BsArrowThroughHeartFill className={css.icon} /> {children}
    </h1>
  );
};
