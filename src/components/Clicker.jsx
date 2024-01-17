import { useState } from 'react';

export const Clicker = ({ value, onUpdate, initialValue }) => {
  const [clicks, setClicks] = useState(initialValue);

  const handleClicks = () => {
    setClicks(clicks + 1);
    onUpdate();
  };

  return (
    <div style={{ padding: 4, border: '1px solid black' }}>
      <button onClick={onUpdate}>Update total clicks - {value}</button>
      <button onClick={handleClicks}>Update my clicks - {clicks}</button>
    </div>
  );
};
