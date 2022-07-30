import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterReact from './Routes';
import { Global } from './styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <RouterReact></RouterReact>
  </React.StrictMode>
);

