import { Link, useLocation } from 'react-router-dom';
import css from './PaymentList.module.css';

export const PaymentList = ({ payments }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {payments.map(payment => (
        <li key={payment.id} className={css.item}>
          <p>Amount: {payment.amount}</p>
          <p>Description: {payment.description}</p>
          <Link to={`/payments/${payment.id}`} state={location}>
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
};
