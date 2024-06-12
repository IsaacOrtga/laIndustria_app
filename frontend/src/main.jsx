import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { AppRoutes } from './routes/AppRoutes.jsx';
import { NavbarApp } from './components/pure/navbar/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavbarApp />
    <AppRoutes />
  </BrowserRouter>
)
