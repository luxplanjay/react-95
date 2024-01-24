export const Users = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
          <p>{item.username}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
