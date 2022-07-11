import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  News,
  CryptoDetails,
  Exchanges,
  Cryptocurrencies,
} from "./components";

const { Sider, Footer, Content } = Layout;

const App = () => {
  console.log(process.env.REACT_APP_RAPIDAPI_KEY);
  return (
    <Layout className="app" style={{ minHeight: "100vh" }}>
      <Sider
        className="navbar"
        width="300px"
        style={{
          position: "fixed",
          overflow: "auto",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Navbar />
      </Sider>

      <Layout
        className="main"
        style={{ padding: "20px", marginLeft: 300, overflow: "initial" }}
      >
        <Content className="routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </Content>
        <Footer className="footer">
          <div>
            <Typography.Title>
              Cryptoverse
              <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
