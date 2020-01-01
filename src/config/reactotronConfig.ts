import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  if (tron.clear) tron.clear();

  console.tron = tron;
}
