import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import cryptoIcon from "../images/cryptocurrency.png";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "cryptocurrencies",
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },

  {
    key: "news",
    icon: <BulbOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const { Title } = Typography;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div
        className="logo-container"
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
        }}
      >
        <Avatar src={cryptoIcon} size="large" />
        <Typography level={2} className="logo">
          <Title>
            <Link to="/">Cryptoverse</Link>
          </Title>
          {/* {activeMenu &&} */}
        </Typography>
        {/* <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        > */}
        {/* <MenuOutlined />
        </Button> */}
      </div>

      {activeMenu && <Menu items={menuItems} theme="dark" />}
    </div>
  );
};

export default Navbar;
