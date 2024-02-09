import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';

const HomePage = lazy(() => import('../pages/HomePage'));
const PaymentsPage = lazy(() => import('../pages/PaymentsPage'));
const PaymentDetailsPage = lazy(() => import('../pages/PaymentDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const SubpageA = lazy(() => import('./SubpageA'));
const SubpageB = lazy(() => import('./SubpageB'));

export const App = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="subpage-a" element={<SubpageA />} />
            <Route path="subpage-b" element={<SubpageB />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
