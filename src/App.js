import './App.scss';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dates from './components/Dates/Dates';


function App() {
  return (
    <BrowserRouter className="browser__router">
      <Header/>
    <div className="App">
      <Routes>
      <Route path="/" element={<Dates/>} />
      
      </Routes>
    </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
