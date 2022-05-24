import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import renderForm from './Components/login';
import renderHeader from "./Components/header"
import renderFooter from "./Components/footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [renderForm,
  renderHeader,
  renderFooter]
);
