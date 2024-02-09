import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getPaymentById } from '../api';
import { PageTitle } from '../components/PageTitle';
import { BackLink } from '../components/BackLink';

export default function PaymentDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPayment = await getPaymentById(paymentId);
        setPayment(fetchedPayment);
      } catch (error) {}
    }
    fetchData();
  }, [paymentId]);

  return (
    <div>
      <PageTitle>Payment details</PageTitle>
      <BackLink href={backLinkRef.current ?? '/payments'}>
        Back to all payments
      </BackLink>
      {payment && (
        <div>
          <div>
            <p>Card number: {payment.cardNumber}</p>
            <p>Card type: {payment.cardType}</p>
            <p>Card owner: {payment.cardOwner}</p>
            <p>
              {payment.isPaid ? 'Paid' : 'Pending'} {payment.amount}$
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <Link to="subpage-a">Subpage A</Link>
            <Link to="subpage-b">Subpage B</Link>
          </div>

          <Suspense fallback={<b>Loading subpage...</b>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
