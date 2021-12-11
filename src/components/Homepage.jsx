// import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
// import { Link } from "react-router-dom";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        World Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total MarketCap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24hr Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
