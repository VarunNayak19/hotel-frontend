import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BrowseMenu from './components/BrowseMenu/BrowseMenu';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import NoPage from './pages/nopage/nopage';
import BookATable from './pages/bookATable/bookATable';
import RegisterScreen from './components/register/Register';

function App() {
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(
  //   localStorage.getItem('loggedIn') === 'true'
  // );

  // useEffect(() => {
  //   // Update localStorage when loggedIn state changes
  //   console.log(loggedIn)
  //   localStorage.setItem('loggedIn', loggedIn);
  //   loggedIn && navigate("/");
  // }, [loggedIn]);

  return (
    <>
      <Header />
      <Routes>
        {/* <Route
          path="/"
          element={
            loggedIn ? <Navigate to="/home" /> : <Navigate to="/register" />
          }
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<BookATable />} />
        {/* <Route path="/register" element={<RegisterScreen setLoggedIn={setLoggedIn} />} /> */}
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;

