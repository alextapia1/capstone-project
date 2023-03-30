import './App.scss';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dates from './components/Dates/Dates';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header/>
      <h1 className='App__name'>Time in Lieu</h1>
      <Dates />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
