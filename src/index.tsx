import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'material-ui-snackbar-provider'

ReactDOM.render(
  <Auth0Provider
    domain="dev-6lk41sct.eu.auth0.com"
    clientId="ttyf0sr8ntIOAmiAsknr22MktXfn6DLz"
    redirectUri="http://localhost:3000/dashboard"
  >
    <React.StrictMode>
      <BrowserRouter>
        <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

