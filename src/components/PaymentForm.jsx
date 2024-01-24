import { useState, useId } from 'react';

export const PaymentForm = ({ onSubmit }) => {
  const usernameFieldId = useId();
  const selectId = useId();

  const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('visa');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({
      username,
      paymentMethod,
    });
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={usernameFieldId}>Username</label>
        <input
          type="text"
          id={usernameFieldId}
          value={username}
          onChange={evt => setUsername(evt.target.value)}
        />
      </div>

      <div>
        <label htmlFor={selectId}></label>
        <select
          id={selectId}
          value={paymentMethod}
          onChange={evt => setPaymentMethod(evt.target.value)}
        >
          <option value="apple">Apple Pay</option>
          <option value="visa">Visa</option>
          <option value="cash">Cash</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
