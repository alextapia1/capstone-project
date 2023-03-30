import './App.scss';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1 className='App__name'>Time in Lieu</h1>
      <div className='footer__text'>
      <p className=''>Twitter</p>
      <p className=''>LinkedIn</p>
      <p className=''>Github</p>
      <p className=''>© AKM Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
