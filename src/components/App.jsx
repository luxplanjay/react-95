// import { useState } from 'react';
// import { Clicker } from './Clicker';
import { Reader } from './Reader';
import articles from '../articles.json';

export const App = () => {
  return (
    <div>
      <Reader items={articles} />
    </div>
  );
};

// export const App = () => {
//   const [count, setCount] = useState(0);

//   const [user, setUser] = useState({
//     username: 'Mango',
//     age: 2,
//     isOnline: true,
//   });

//   const changeUser = () => {
//     setUser({
//       ...user,
//       age: 3,
//     });
//   };

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Total clicks: {count}</p>
//       <Clicker value={count} onUpdate={handleClick} initialValue={0} />
//       <Clicker value={count} onUpdate={handleClick} initialValue={5} />

//       <button onClick={changeUser}>Change user</button>
//     </div>
//   );
// };
