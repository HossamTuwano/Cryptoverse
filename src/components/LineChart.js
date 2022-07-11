import React from "react";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row
        className="chart-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Title level={2} style={color}>
          {coinName} Price Chart
        </Title>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Title level={5} style={{ margin: 0, fontWeight: "bold" }}>
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} style={{ margin: 0, fontWeight: "bold" }}>
            Current {coinName} Price:${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

const color = {
  color: "#61dafb",
};
export default LineChart;
