import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* NavLink,
  Redirect, */
} from "react-router-dom";
import { Layout /* Tabs */ } from "antd";
import SelectCollection from "./components/SearchCollections";
import Chains from "./components/Chains";
/* import TokenPrice from "./components/TokenPrice"; */
import NativeBalance from "./components/NativeBalance";
import Account from "./components/Account/Account";
import NFTBalance from "./components/NFTBalance";
import NFTTokenIds from "./components/NFTTokenIds";
import NFTMarketTransactions from "./components/NFTMarketTransactions";
/* import Text from "antd/lib/typography/Text"; */
import "antd/dist/antd.css";

import "./style.css";
import weblogo from "./images/logo.png";
import MenuItems from "./components/MenuItems";
import Home from "./pages/Home";

const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
function App({ isServerInfo }) {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <SelectCollection setInputValue={setInputValue} />
          <MenuItems setInputValue={setInputValue} />
          <div style={styles.headerRight}>
            <Chains />
            {/* <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            /> */}
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
            <Route path="/wallet">{/* <Wallet /> */}</Route>
            {/* <Route path="/1inch"> */}
            {/* <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1"> */}
            {/*  <DEX chain="eth" /> */}
            {/* </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2"> */}
            {/* <DEX chain="bsc" /> */}
            {/* </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3"> */}
            {/* <DEX chain="polygon" /> */}
            {/* </Tabs.TabPane>
              </Tabs> */}
            {/* </Route> */}
            <Route path="/erc20balance">{/* <ERC20Balance /> */}</Route>
            <Route path="/onramp">{/* <Ramper /> */}</Route>
            <Route path="/erc20transfers">{/* <ERC20Transfers /> */}</Route>
            <Route path="/contract">{/* <Contract /> */}</Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
            <Route path="/ethereum-boilerplate">
              {/* <Redirect to="/quickstart" /> */}
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        {/* <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , every star makes us very happy!
        </Text> */}

        {/* <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text> */}

        {/* <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text> */}
      </Footer>
    </Layout>
  );
}

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <img src={weblogo} alt="logo" width={170} />
  </div>
);

export default App;
