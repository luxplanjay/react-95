import { Profile } from './Profile';

export const PilotList = ({ items }) => {
  return (
    <ul>
      {items.map(pilot => (
        <li key={pilot.id}>
          <Profile pilot={pilot} />
        </li>
      ))}
    </ul>
  );
};
