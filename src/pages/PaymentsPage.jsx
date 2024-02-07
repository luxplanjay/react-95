import { useEffect, useState } from 'react';
import { getPayments } from '../api';
import { PaymentList } from '../components/PaymentList';
import { PageTitle } from '../components/PageTitle';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedPayments = await getPayments({
          abortController: controller,
        });
        setPayments(fetchedPayments);

        // setPayments(prevPayments => [...prevPayments, ...rfetchedPayments]);
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

  return (
    <div>
      <PageTitle>Payments</PageTitle>
      {error && <p>OOOOPS! ERROR!</p>}
      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
}
