import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, fetchTasks } from '../redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>LOADING...</p>}
      {error && <p>ERROR!!!!!</p>}
      {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <p>{item.text}</p>
              <button onClick={() => dispatch(deleteTask(item.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
