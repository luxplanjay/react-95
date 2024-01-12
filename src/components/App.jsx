import pilots from '../pilots.json';
import { PageTitle } from './PageTitle/PageTitle';
import { PilotList } from './PilotList/PilotList';

export const App = () => {
  return (
    <div>
      <PageTitle>Best pilots of our galaxy!</PageTitle>
      <PilotList items={pilots} />
    </div>
  );
};
