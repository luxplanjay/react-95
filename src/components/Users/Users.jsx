import css from './Users.module.css';

const accessType = {
  r: 'Read',
  w: 'Write',
  m: 'Maintain',
};

export const Users = ({ items, onDelete }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id} className={css.listItem}>
          <p>{item.username}</p>
          <p>{accessType[item.access]}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
