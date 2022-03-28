import Header from '../Header';
import Footer from '../Footer';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <main 
      className="page-wrapper"
    > <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
