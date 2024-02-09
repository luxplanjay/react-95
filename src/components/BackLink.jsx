import { Link } from 'react-router-dom';

export const BackLink = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};
