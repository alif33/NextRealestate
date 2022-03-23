import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <main 
      className="page-wrapper"
    >
      <Header />
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
      {children}
      <Footer />
    </main>
  );
}
