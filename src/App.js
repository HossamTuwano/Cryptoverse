import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  News,
  CryptoDetails,
  CryptoCurrencies,
  Exchanges,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/news  " element={<News />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
      </Routes>
    </>
  );
};

export default App;
