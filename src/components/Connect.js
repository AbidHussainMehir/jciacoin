export function Connect() {
  function closeNav9() {
    document.getElementById("myNav9").style.display = "none";
  }

  return (
    <div id="myNav9" className="overlay9 textcenter">
      <div className="setting_close">
        <span className="tokenset">Connect to a wallet</span>
        <span onClick={closeNav9}>&times;</span>
      </div>
      <div className="bx_shadow"></div>
      <div className="overlay9-content">
        <div className="swapbg9">
          <div className="connect_wallet">
            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>Metamask</h3>
              </div>
              <div className="wallet_name">
                <img src={require("../assets/image/meta_mask.png")} />
              </div>
            </button>

            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>TrustWallet</h3>
              </div>
              <div className="wallet_name">
                <img src={require("../assets/image/trust_wallet.png")} />
              </div>
            </button>

            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>MathWallet</h3>
              </div>
              <div className="wallet_name">
                <img src={require("../assets/image/math_wallet.png")} />
              </div>
            </button>

            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>MathWallet</h3>
              </div>
              <div className="wallet_name">
                <img src={require("../assets/image/math_wallet.png")} />
              </div>
            </button>

            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>WalletConnect</h3>
              </div>
              <div className="wallet_name">
                <img src={require("../assets/image/connect_wallet.png")} />
              </div>
            </button>

            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>Binance Chain Wallet</h3>
              </div>
              <div className="wallet_name">
                <img
                // src={require("../assets/image/binance_chain_wallet.png")}
                />
              </div>
            </button>

            <button className="connect_metamast">
              <div className="wallet_name">
                <h3>SafePal Wallet</h3>
              </div>
              <div className="wallet_name">
                <img src={require("../assets/image/safepal_wallet.png")} />
              </div>
            </button>
            <div className="connect_info">
              <a href="#">
                <i className="fa fa-question"></i>Learn how to connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
