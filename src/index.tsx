import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import './index.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
