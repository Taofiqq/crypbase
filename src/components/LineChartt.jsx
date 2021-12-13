import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { Chart } from "chart.js/auto";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimesStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimesStamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimesStamp,
    datasets: [
      {
        label: "Price in USD",
        fill: false,
        data: coinPrice,
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
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          Price Chart
        </Title>
        <Col className="price-container">
          <Title level={4} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={4} className="current-price">
            Current {coinName} Price : ${currentPrice}
          </Title>
        </Col>
      </Row>

      <Line data={data} options={options}></Line>
    </>
  );
};

export default LineChart;
