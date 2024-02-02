// import { UseMemoExample } from './UseMemoExample';
// import { RefExample } from './RefExample';
// import { Timer } from './Timer';

import { useLang } from '../langContext';
import { LangSwitcher } from './LangSwitcher';

export const App = () => {
  const ctx = useLang();

  return (
    <div>
      <LangSwitcher />
      <p>Current lang: {ctx.lang}</p>

      {/* <Timer /> */}
      {/* <UseMemoExample /> */}
      {/* <RefExample /> */}
    </div>
  );
};
