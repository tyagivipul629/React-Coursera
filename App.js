import React from 'react';

import Main from './MainComponent.js';

import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConfigureStore } from './configureStore.js';

const store = ConfigureStore();

class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

