import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="logo-container">
        <Avatar />
        <Typography.Title>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
    </div>
  );
};

export default Navbar;
