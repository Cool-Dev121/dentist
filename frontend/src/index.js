import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import './i18n/config';
import { LRAuthProvider } from "loginradius-react";
import 'tw-elements';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <React.StrictMode>
      <LRAuthProvider
        appName={process.env.REACT_APP_LR_APP_NAME || ""}
        apiKey={process.env.REACT_APP_API_KEY || ""}
        redirectUri={window.location.origin}
      >
        <App />
      </LRAuthProvider>
    </React.StrictMode>,
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
