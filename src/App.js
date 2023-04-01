import './App.scss';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dates from './components/Dates/Dates';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <BrowserRouter className="browserRouter">
      <Header/>
    <div className="App">
      <Routes>
      <Route path="/" element={<Dates/>} />
     {/*<Notes />*/}
      </Routes>
    </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
