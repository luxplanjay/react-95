import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPayments } from '../api';
import { PaymentList } from '../components/PaymentList';
import { PageTitle } from '../components/PageTitle';
import { Filter } from '../components/Filter';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const filter = params.get('filter') ?? '';

  const changeFilter = newFilter => {
    params.set('filter', newFilter);
    setParams(params);
  };

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedPayments = await getPayments({
          abortController: controller,
        });
        setPayments(fetchedPayments);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredPayments = payments.filter(payment =>
    payment.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <PageTitle>Payments</PageTitle>
      {error && <p>OOOOPS! ERROR!</p>}
      <Filter value={filter} onChange={changeFilter} />
      {payments.length > 0 && <PaymentList payments={filteredPayments} />}
    </div>
  );
}
