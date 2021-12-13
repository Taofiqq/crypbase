import { useGetCryptoNewsQuery } from "../utils/cryptoNewsApi";
import { useGetCryptosQuery } from "../utils/cryptoApi";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useState } from "react";
import Loader from "./Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("CryptoCurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 15,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select A Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="CryptoCurrency">Currency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, index) => (
        <Col key={index} xs={24} sm={12} lg={8}>
          <Card hoverable classname="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title level={4} className="news-title">
                  {news.name}
                </Title>
                <img
                  alt=""
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                />
              </div>
              <p>
                {news.description > 50
                  ? `$news.description.substring(0, 50)}...`
                  : news.description}
                .
              </p>

              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl
                        ?.contentUrl || demoImage
                    }
                  />
                  <Text>{news.provider[0]?.name}</Text>
                </div>
                <Text className="provider-name">
                  {moment(news.dataPublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
