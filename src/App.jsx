import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  News,
  CryptoDetails,
  Exchanges,
  Cryptocurrencies,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
              <Route exact path="/news" component={News} />
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level="5"
            style={{ color: "white", textAlign: "center" }}
          >
            CrypBase. 2021. All Right Reserved
          </Typography.Title>

          <Space>
            <Link to="/">Home</Link>
            <Link to="/">Exchanges</Link>
            <Link to="/">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
