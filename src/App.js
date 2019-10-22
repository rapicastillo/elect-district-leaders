import React from 'react';

import NewReformers from './containers/NewReformers';
import { Provider } from 'react-redux';
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <NewReformers />
    </Provider>
  );
}

export default App;
