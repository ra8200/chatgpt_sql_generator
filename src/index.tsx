import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1 className="">ChatSQLGen</h1>
    <p>
       Example:<br/>
       find all users who live in California and have over 1000 credits
    </p>
    <App />
  </React.StrictMode>
);
