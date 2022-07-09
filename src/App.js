import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default App;
