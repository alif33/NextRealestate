import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);