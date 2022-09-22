import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BooksList from './components/BooksList';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import ErrorPage from './components/pages/ErrorPage';
import Layout from './components/pages/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BooksList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
