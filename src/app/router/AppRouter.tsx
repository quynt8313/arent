import TopPage from 'pages/TopPage';
import MyRecord from 'pages/MyRecord';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='main'>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/my_record" element={<MyRecord />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
