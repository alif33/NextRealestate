import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);