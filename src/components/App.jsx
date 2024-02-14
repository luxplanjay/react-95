import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/balanceSlice';
import LangSwitcher from './LangSwitcher';

export default function App() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);
  const lang = useSelector(state => state.locale.lang);

  return (
    <div>
      <LangSwitcher />
      <p>Current lang: {lang}</p>
      <hr />
      <p>Balance: {balance} credits</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw 5 credits</button>
    </div>
  );
}
