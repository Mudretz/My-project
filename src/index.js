import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import NavBar from './common/navBar';

const root = ReactDOM.createRoot(document.getElementById("intro"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <NavBar />
            <App />
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
