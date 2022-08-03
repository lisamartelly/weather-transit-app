import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './App.scss';
import Weather from './Weather.js';
import Transit from './Transit.js';

function App() {
  return (
    <div className="App">
      <header className="tab">
        <Weather/>
      </header>
      <header className="tab">
        <Transit/>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
