import toast from 'react-hot-toast';

export const SearchBox = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING!');
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
