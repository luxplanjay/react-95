import { Profile } from '../Profile/Profile';
import './PilotList.css';

export const PilotList = ({ items }) => {
  return (
    <ul className="list">
      {items.map(pilot => (
        <li key={pilot.id}>
          <Profile pilot={pilot} />
        </li>
      ))}
    </ul>
  );
};
