import pilots from '../pilots.json';
import { PageTitle } from './PageTitle';
import { PilotList } from './PilotList';

export const App = () => {
  return (
    <div>
      <PageTitle>Best pilots!</PageTitle>
      <PilotList items={pilots} />
    </div>
  );
};
