import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Nav from '../components/Nav/Nav';
import Login from '../components/Login/Login';
import Shop from '../components/Shop/Shop';

// Import your components here

const AppRouter = () => {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default AppRouter;
