import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Login from './components/Login';
import Singup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [LoggedIn, setLoggedIn] = useState()
  return (
   <BrowserRouter>
   <Header />

   <Routes>
    <Route path='/'  element={<Singup />} />
    <Route path='/login' element={<Login />} />
    <Route path='*' element={<h2>Wrong Path</h2>} />
   </Routes>

   <Footer />
   </BrowserRouter>
  );
}

export default App;
