import { Link } from 'react-router-dom';

export const PaymentList = ({ payments }) => {
  return (
    <ul>
      {payments.map(payment => (
        <li key={payment.id}>
          <p>Amount: {payment.amount}</p>
          <p>Description: {payment.description}</p>
          <Link to={`/payments/${payment.id}`}>Details</Link>
        </li>
      ))}
    </ul>
  );
};
