import Web3 from "web3";
import { useState } from "react"; 
import IconImage from '../../assets/image/logo.png'
export function Navbar() {
  function openNav9() {
    console.log("called");
    document.getElementById("myNav9").style.display = "block";
  }

  function closeNav9() {
    document.getElementById("myNav9").style.display = "none";
  }
  const [account, setAccount] = useState(null);

  const metamask = async () => {
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      }
      if (isConnected === true) {
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        window.ethereum.on("accountsChanged", async function (accounts) {
          setAccount(accounts[0]);
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error message", error?.message);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid set_nav_width">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-primary custom_btn_set"
        >
          <i className="fa fa-bars" style={{ color: "#fff" }}></i>
        </button>
        <div className="top_navbar">
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{ borderBottom: "unset" }}
          >
            <a className="navbar-brand" href="/">
              <img src={IconImage} />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/swap">
                  Swap
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Pool
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Browse
                  </a>
                  <a className="dropdown-item" href="/">
                    Import
                  </a>
                  <a className="dropdown-item" href="/">
                    Migrate
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Trade
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/swap">
                    Exchange
                  </a>
                  <a className="dropdown-item" href="/liquidity">
                    Liquidity
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Game
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="https://www.game.cstswap.io/"
                    target="_blank"
                  >
                    Game
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.game2.cstswap.io/"
                    target="_blank"
                  >
                    Game 2
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Farm
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Your Farms
                  </a>
                  <a className="dropdown-item" href="/">
                    All Farms
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" target="_blank">
                  NFT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  NFT Marketplace
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/" target="_blank">
                    Explore
                  </a>
                  <a className="dropdown-item" href="/" target="_blank">
                    Open Market
                  </a>
                  <a className="dropdown-item" href="/" target="_blank">
                    Game Assets
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" target="_blank">
                  Launchpad
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Contact
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" target="_blank">
                    <i className="fa fa-twitter"></i> Twitter
                  </a>
                  <a className="dropdown-item" href="#" target="_blank">
                    <i className="fa fa-instagram"></i> Instagram
                  </a>
                  <a className="dropdown-item" href="#" target="_blank">
                    <i className="fa fa-telegram"></i> Telegram
                  </a>
                  <a className="dropdown-item" href="#" target="_blank">
                    <i className="fa fa-medium"></i> Medium
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <button
          className="btn button btn-success d-inline-block ml-auto contact"
          onClick={metamask}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-wallet"></i>
          {account
                ? `${account.slice(0, 5)}...${account.slice(
                    account.length - 5,
                    account.length
                  )}`
                : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
