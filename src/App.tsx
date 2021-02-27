import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Provider>
      <GlobalStyle/>
    </div>
  );
}

export default App;
