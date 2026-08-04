import { Outlet, useLocation } from '@/lib/react-router-dom-compat';
import Navbar from './Navbar';
import Footer from './Footer';
import EnquiryNavbar from './EnquiryNavbar';
import EnquiryFooter from './EnquiryFooter';

const Layout = () => {
  const location = useLocation();
  const isEnquiry = location.pathname === '/enquiry';
  const isThankYou = location.pathname === '/thank-you';

  if (isThankYou) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {isEnquiry ? <EnquiryNavbar /> : <Navbar />}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {isEnquiry ? <EnquiryFooter /> : <Footer />}
    </div>
  );
};

export default Layout;