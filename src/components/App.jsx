import { useState } from 'react';
import { Filter } from './Filter';
import { Users } from './Users';
import { UserForm } from './UserForm';
// import { PaymentForm } from './PaymentForm';

export const App = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [users, setUsers] = useState([
    { username: 'Jacob', id: 11124 },
    { username: 'Mango', id: 89278 },
    { username: 'Elena', id: 78817 },
    { username: 'Orlando', id: 87667 },
    { username: 'Gimli', id: 45776 },
  ]);

  const addUser = newUser => {
    setUsers(prevUsers => {
      return [
        ...prevUsers,
        {
          username: newUser,
          id: Date.now(),
        },
      ];
    });
  };

  const deleteUser = userId => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  const visibleUsers = users.filter(user =>
    user.username.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <>
      <UserForm onAdd={addUser} />
      <hr />
      <Filter value={nameFilter} onChange={setNameFilter} />
      <Users items={visibleUsers} onDelete={deleteUser} />
    </>
  );
};
